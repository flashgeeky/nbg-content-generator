import { FormData } from '../types'

export function buildBrandPagePrompt(formData: FormData): string {
  const {
    primaryKeyword,
    productTypes,
    secondaryKeywords,
    semanticKeywords,
    faqInput,
    targetWordCount,
    refineInstructions,
  } = formData

  const productTypesList = productTypes
    .split(/[,\n]/)
    .map(p => p.trim())
    .filter(Boolean)
    .join(', ')

  const secondaryKeywordsList = secondaryKeywords
    .split(/[,\n]/)
    .map(k => k.trim())
    .filter(Boolean)
    .join(', ')

  const semanticKeywordsList = semanticKeywords
    .split(/[,\n]/)
    .map(k => k.trim())
    .filter(Boolean)
    .join(', ')

  return `You are a firearms industry expert writing SEO-optimized content for No Boring Guns, a European firearms and accessories ecommerce site. Write in a confident, experienced tone - like a straight-shooting expert who knows the industry inside and out. No fluff, no marketing speak, just valuable insights.

CONTENT TYPE: Brand Page

PRIMARY KEYWORD: ${primaryKeyword}

PRODUCT TYPES IN TAXONOMY: ${productTypesList}

SECONDARY KEYWORDS TO INTEGRATE: ${secondaryKeywordsList}

SEMANTIC KEYWORDS TO INTEGRATE: ${semanticKeywordsList}

TARGET WORD COUNT: Approximately ${targetWordCount} words for the main content

${refineInstructions ? `ADDITIONAL INSTRUCTIONS: ${refineInstructions}\n` : ''}
FAQ QUESTIONS & ANSWERS TO INCLUDE:
${faqInput}

CONTENT REQUIREMENTS:

1. MAIN CONTENT (${targetWordCount} words):
   - Start with a strong opening that establishes the brand's position
   - Brand story and heritage (what makes them who they are)
   - Product lineup overview (reference the product types provided)
   - Why choose this brand at No Boring Guns (value proposition)
   - What makes this brand stand out (unique selling points)
   - Use H2 headings for major sections (e.g., "Brand Heritage", "Product Excellence")
   - Use H3 for subsections if needed
   - Naturally integrate ALL provided keywords throughout the content
   - DO NOT keyword stuff - keywords should flow naturally
   - Use euros (€) for any pricing or value mentions
   - Write in a knowledgeable, confident tone - you're the expert
   - Keep paragraphs focused and readable

2. META TITLE (50-60 characters):
   - Must end with " | No Boring Guns"
   - Include primary keyword
   - Compelling and click-worthy
   - Stay within character limit

3. META DESCRIPTION (150-160 characters):
   - Include primary keyword
   - Clear value proposition
   - Call to action
   - Stay within character limit

4. FAQ SECTION:
   - Use the provided Q&A pairs
   - Format with H3 for each question
   - Provide detailed, expert answers
   - Maintain the same confident, knowledgeable tone

OUTPUT FORMAT:
Provide your response in this exact structure:

---MAIN-CONTENT-START---
[Your main content HTML here with H2 and H3 tags]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Your meta title here]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Your meta description here]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[Your FAQ HTML here with H3 tags for questions]
---FAQ-SECTION-END---

Remember: Write like an experienced firearms professional. Be authoritative, be clear, and respect the reader's intelligence. No boring content, no fluff.`
}

export function buildCategoryPagePrompt(formData: FormData): string {
  const {
    primaryKeyword,
    productTypes,
    secondaryKeywords,
    semanticKeywords,
    faqInput,
    targetWordCount,
    refineInstructions,
  } = formData

  const productTypesList = productTypes
    .split(/[,\n]/)
    .map(p => p.trim())
    .filter(Boolean)
    .join(', ')

  const secondaryKeywordsList = secondaryKeywords
    .split(/[,\n]/)
    .map(k => k.trim())
    .filter(Boolean)
    .join(', ')

  const semanticKeywordsList = semanticKeywords
    .split(/[,\n]/)
    .map(k => k.trim())
    .filter(Boolean)
    .join(', ')

  return `You are a firearms industry expert writing SEO-optimized content for No Boring Guns, a European firearms and accessories ecommerce site. Write in a confident, experienced tone - like a straight-shooting expert who knows the industry inside and out. No fluff, no marketing speak, just valuable insights.

CONTENT TYPE: Category Page

PRIMARY KEYWORD: ${primaryKeyword}

PRODUCT TYPES IN THIS CATEGORY: ${productTypesList}

SECONDARY KEYWORDS TO INTEGRATE: ${secondaryKeywordsList}

SEMANTIC KEYWORDS TO INTEGRATE: ${semanticKeywordsList}

TARGET WORD COUNT: Approximately ${targetWordCount} words for the main content

${refineInstructions ? `ADDITIONAL INSTRUCTIONS: ${refineInstructions}\n` : ''}
FAQ QUESTIONS & ANSWERS TO INCLUDE:
${faqInput}

CONTENT REQUIREMENTS:

1. MAIN CONTENT (${targetWordCount} words):
   - Start with a strong opening that establishes what this category is about
   - Product category education (what these products are and why they matter)
   - Comprehensive buying guide (what to look for when choosing)
   - Popular options in this category (reference the product types provided)
   - How to choose the right product for different needs/uses
   - Use H2 headings for major sections (e.g., "Understanding [Category]", "Buying Guide", "Popular Options")
   - Use H3 for subsections if needed
   - Naturally integrate ALL provided keywords throughout the content
   - DO NOT keyword stuff - keywords should flow naturally
   - Use euros (€) for any pricing or value mentions
   - Write in a knowledgeable, confident tone - you're the expert
   - Keep paragraphs focused and readable

2. META TITLE (50-60 characters):
   - Must end with " | No Boring Guns"
   - Include primary keyword
   - Compelling and click-worthy
   - Stay within character limit

3. META DESCRIPTION (150-160 characters):
   - Include primary keyword
   - Clear value proposition
   - Call to action
   - Stay within character limit

4. FAQ SECTION:
   - Use the provided Q&A pairs
   - Format with H3 for each question
   - Provide detailed, expert answers
   - Maintain the same confident, knowledgeable tone

OUTPUT FORMAT:
Provide your response in this exact structure:

---MAIN-CONTENT-START---
[Your main content HTML here with H2 and H3 tags]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Your meta title here]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Your meta description here]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[Your FAQ HTML here with H3 tags for questions]
---FAQ-SECTION-END---

Remember: Write like an experienced firearms professional. Be authoritative, be clear, and respect the reader's intelligence. Focus on helping buyers make informed decisions. No boring content, no fluff.`
}
