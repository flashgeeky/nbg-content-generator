import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { FormData, GeneratedContent } from '../../types'
import { buildBrandPagePrompt, buildCategoryPagePrompt } from '../../lib/prompts'

export const maxDuration = 60 // Allow up to 60 seconds for content generation

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'API key not configured. Please set ANTHROPIC_API_KEY environment variable.' },
        { status: 500 }
      )
    }

    // Parse request body
    const formData: FormData = await request.json()

    // Validate required fields
    if (!formData.primaryKeyword || !formData.contentType) {
      return NextResponse.json(
        { success: false, error: 'Primary keyword and content type are required.' },
        { status: 400 }
      )
    }

    // Build the appropriate prompt
    const prompt = formData.contentType === 'brand'
      ? buildBrandPagePrompt(formData)
      : buildCategoryPagePrompt(formData)

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: apiKey,
    })

    // Call Claude API
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8000,
      temperature: 1,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    // Extract the response text
    const responseText = message.content[0].type === 'text'
      ? message.content[0].text
      : ''

    if (!responseText) {
      return NextResponse.json(
        { success: false, error: 'No content generated from API.' },
        { status: 500 }
      )
    }

    // Parse the structured response
    const content = parseGeneratedContent(responseText)

    return NextResponse.json({
      success: true,
      content,
    })

  } catch (error: any) {
    console.error('API Error:', error)

    // Handle specific error types
    if (error?.status === 429) {
      return NextResponse.json(
        { success: false, error: 'Rate limit reached. Please try again in a moment.' },
        { status: 429 }
      )
    }

    if (error?.status === 401) {
      return NextResponse.json(
        { success: false, error: 'Invalid API key. Please check your configuration.' },
        { status: 401 }
      )
    }

    if (error?.code === 'ECONNABORTED' || error?.code === 'ETIMEDOUT') {
      return NextResponse.json(
        { success: false, error: 'Request timeout. Please try again.' },
        { status: 504 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'An unexpected error occurred. Please try again.'
      },
      { status: 500 }
    )
  }
}

function parseGeneratedContent(text: string): GeneratedContent {
  // Extract sections using delimiters
  const mainContent = extractSection(text, '---MAIN-CONTENT-START---', '---MAIN-CONTENT-END---')
  const metaTitle = extractSection(text, '---META-TITLE-START---', '---META-TITLE-END---')
  const metaDescription = extractSection(text, '---META-DESCRIPTION-START---', '---META-DESCRIPTION-END---')
  const faqSection = extractSection(text, '---FAQ-SECTION-START---', '---FAQ-SECTION-END---')

  // Calculate metrics
  const wordCount = countWords(mainContent)
  const metaTitleLength = metaTitle.length
  const metaDescriptionLength = metaDescription.length

  return {
    mainContent: mainContent.trim(),
    metaTitle: metaTitle.trim(),
    metaDescription: metaDescription.trim(),
    faqSection: faqSection.trim(),
    wordCount,
    metaTitleLength,
    metaDescriptionLength,
  }
}

function extractSection(text: string, startDelimiter: string, endDelimiter: string): string {
  const startIndex = text.indexOf(startDelimiter)
  const endIndex = text.indexOf(endDelimiter)

  if (startIndex === -1 || endIndex === -1) {
    return ''
  }

  return text.substring(startIndex + startDelimiter.length, endIndex).trim()
}

function countWords(text: string): number {
  // Remove HTML tags and count words
  const plainText = text.replace(/<[^>]*>/g, ' ')
  const words = plainText.trim().split(/\s+/)
  return words.filter(word => word.length > 0).length
}
