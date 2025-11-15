'use client'

import { ContentFormData, ContentType } from '../types'

interface ContentFormProps {
  formData: ContentFormData
  onFormDataChange: (data: ContentFormData) => void
  onGenerate: () => void
  isLoading: boolean
}

export default function ContentForm({
  formData,
  onFormDataChange,
  onGenerate,
  isLoading,
}: ContentFormProps) {
  const handleInputChange = (
    field: keyof ContentFormData,
    value: string | number | ContentType
  ) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Content Generator</h2>
        <p className="mt-1 text-sm text-gray-600">
          Generate SEO-optimized content for No Boring Guns
        </p>
      </div>

      {/* Content Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Content Type
        </label>
        <div className="flex gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contentType"
              value="brand"
              checked={formData.contentType === 'brand'}
              onChange={(e) => handleInputChange('contentType', e.target.value as ContentType)}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700">Brand Page</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contentType"
              value="category"
              checked={formData.contentType === 'category'}
              onChange={(e) => handleInputChange('contentType', e.target.value as ContentType)}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700">Category Page</span>
          </label>
        </div>
      </div>

      {/* Primary Keyword */}
      <div>
        <label htmlFor="primaryKeyword" className="block text-sm font-medium text-gray-700 mb-2">
          Primary Keyword *
        </label>
        <input
          type="text"
          id="primaryKeyword"
          value={formData.primaryKeyword}
          onChange={(e) => handleInputChange('primaryKeyword', e.target.value)}
          placeholder="e.g., Holosun red dot sights"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Product Types */}
      <div>
        <label htmlFor="productTypes" className="block text-sm font-medium text-gray-700 mb-2">
          Product Types in Taxonomy
        </label>
        <textarea
          id="productTypes"
          value={formData.productTypes}
          onChange={(e) => handleInputChange('productTypes', e.target.value)}
          placeholder="Enter product types (comma-separated or one per line)&#10;e.g., red dot sights, holographic sights, reflex sights"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
        />
      </div>

      {/* Secondary Keywords */}
      <div>
        <label htmlFor="secondaryKeywords" className="block text-sm font-medium text-gray-700 mb-2">
          Secondary Keywords
        </label>
        <textarea
          id="secondaryKeywords"
          value={formData.secondaryKeywords}
          onChange={(e) => handleInputChange('secondaryKeywords', e.target.value)}
          placeholder="Enter secondary keywords (comma-separated or one per line)&#10;e.g., tactical optics, firearm accessories, shooting optics"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
        />
      </div>

      {/* Semantic Keywords */}
      <div>
        <label htmlFor="semanticKeywords" className="block text-sm font-medium text-gray-700 mb-2">
          Semantic Keywords
        </label>
        <textarea
          id="semanticKeywords"
          value={formData.semanticKeywords}
          onChange={(e) => handleInputChange('semanticKeywords', e.target.value)}
          placeholder="Enter semantic/LSI keywords (comma-separated or one per line)&#10;e.g., precision aiming, target acquisition, close quarters combat"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
        />
      </div>

      {/* FAQ Input */}
      <div>
        <label htmlFor="faqInput" className="block text-sm font-medium text-gray-700 mb-2">
          FAQ Questions & Answers
        </label>
        <textarea
          id="faqInput"
          value={formData.faqInput}
          onChange={(e) => handleInputChange('faqInput', e.target.value)}
          placeholder="Enter Q&A pairs:&#10;Q: What is the best red dot sight for beginners?&#10;A: For beginners, we recommend...&#10;&#10;Q: How do I zero my red dot sight?&#10;A: Zeroing your red dot involves..."
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
        />
      </div>

      {/* Target Word Count */}
      <div>
        <label htmlFor="targetWordCount" className="block text-sm font-medium text-gray-700 mb-2">
          Target Word Count
        </label>
        <select
          id="targetWordCount"
          value={formData.targetWordCount}
          onChange={(e) => handleInputChange('targetWordCount', parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value={500}>500 words</option>
          <option value={750}>750 words</option>
          <option value={1000}>1000 words</option>
          <option value={1500}>1500 words</option>
        </select>
      </div>

      {/* Refine Instructions */}
      <div>
        <label htmlFor="refineInstructions" className="block text-sm font-medium text-gray-700 mb-2">
          Optional Refine Instructions
        </label>
        <textarea
          id="refineInstructions"
          value={formData.refineInstructions}
          onChange={(e) => handleInputChange('refineInstructions', e.target.value)}
          placeholder="e.g., make it more technical, add more brand personality, focus on competitive shooters"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
        />
      </div>

      {/* Generate Button */}
      <button
        type="submit"
        disabled={isLoading || !formData.primaryKeyword}
        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Content...
          </span>
        ) : (
          'Generate Content'
        )}
      </button>
    </form>
  )
}
