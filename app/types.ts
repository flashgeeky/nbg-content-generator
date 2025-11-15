export type ContentType = 'brand' | 'category'

export interface ContentFormData {
  contentType: ContentType
  primaryKeyword: string
  productTypes: string
  secondaryKeywords: string
  semanticKeywords: string
  faqInput: string
  targetWordCount: number
  refineInstructions: string
}

export interface GeneratedContent {
  mainContent: string
  metaTitle: string
  metaDescription: string
  faqSection: string
  wordCount: number
  metaTitleLength: number
  metaDescriptionLength: number
}

export interface ApiResponse {
  success: boolean
  content?: GeneratedContent
  error?: string
}
