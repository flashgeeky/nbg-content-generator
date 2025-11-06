'use client'

import { useState } from 'react'
import { GeneratedContent } from '../types'

interface ContentOutputProps {
  content: GeneratedContent | null
  onRegenerate: () => void
  isLoading: boolean
}

export default function ContentOutput({
  content,
  onRegenerate,
  isLoading,
}: ContentOutputProps) {
  const [activeTab, setActiveTab] = useState<'main' | 'meta-title' | 'meta-desc' | 'faq'>('main')
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null)

  if (!content && !isLoading) {
    return (
      <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No content generated yet</h3>
        <p className="mt-1 text-sm text-gray-500">
          Fill out the form and click Generate to create your content.
        </p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-300 p-12">
        <div className="text-center">
          <svg
            className="animate-spin mx-auto h-12 w-12 text-primary-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Generating Content...</h3>
          <p className="mt-2 text-sm text-gray-500">
            This may take 20-30 seconds. Please wait.
          </p>
        </div>
      </div>
    )
  }

  if (!content) return null

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyFeedback(`${label} copied!`)
      setTimeout(() => setCopyFeedback(null), 2000)
    } catch (err) {
      setCopyFeedback('Failed to copy')
      setTimeout(() => setCopyFeedback(null), 2000)
    }
  }

  const copyAll = () => {
    const allContent = `
MAIN CONTENT:
${content.mainContent}

---

META TITLE:
${content.metaTitle}

---

META DESCRIPTION:
${content.metaDescription}

---

FAQ SECTION:
${content.faqSection}
    `.trim()

    copyToClipboard(allContent, 'All content')
  }

  const getActiveContent = () => {
    switch (activeTab) {
      case 'main':
        return content.mainContent
      case 'meta-title':
        return content.metaTitle
      case 'meta-desc':
        return content.metaDescription
      case 'faq':
        return content.faqSection
      default:
        return ''
    }
  }

  const getActiveLabel = () => {
    switch (activeTab) {
      case 'main':
        return 'Main Content'
      case 'meta-title':
        return 'Meta Title'
      case 'meta-desc':
        return 'Meta Description'
      case 'faq':
        return 'FAQ Section'
      default:
        return ''
    }
  }

  const getMetrics = () => {
    switch (activeTab) {
      case 'main':
        return `${content.wordCount} words`
      case 'meta-title':
        return `${content.metaTitleLength} characters`
      case 'meta-desc':
        return `${content.metaDescriptionLength} characters`
      case 'faq':
        return ''
      default:
        return ''
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-300">
      {/* Action Buttons */}
      <div className="border-b border-gray-200 p-4 flex gap-3">
        <button
          onClick={copyAll}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Copy All
        </button>
        <button
          onClick={onRegenerate}
          className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          Regenerate
        </button>
      </div>

      {/* Copy Feedback */}
      {copyFeedback && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-2 text-sm text-green-800 text-center">
          {copyFeedback}
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-4 px-4 text-center border-b-2 font-medium text-sm ${
              activeTab === 'main'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Main Content
          </button>
          <button
            onClick={() => setActiveTab('meta-title')}
            className={`flex-1 py-4 px-4 text-center border-b-2 font-medium text-sm ${
              activeTab === 'meta-title'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Meta Title
          </button>
          <button
            onClick={() => setActiveTab('meta-desc')}
            className={`flex-1 py-4 px-4 text-center border-b-2 font-medium text-sm ${
              activeTab === 'meta-desc'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Meta Description
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-4 px-4 text-center border-b-2 font-medium text-sm ${
              activeTab === 'faq'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            FAQ Section
          </button>
        </nav>
      </div>

      {/* Content Display */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-900">{getActiveLabel()}</h3>
            {getMetrics() && (
              <span className="text-sm text-gray-500">{getMetrics()}</span>
            )}
          </div>
          <button
            onClick={() => copyToClipboard(getActiveContent(), getActiveLabel())}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 text-sm"
          >
            Copy
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          {activeTab === 'main' || activeTab === 'faq' ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: getActiveContent() }}
            />
          ) : (
            <p className="text-gray-900 whitespace-pre-wrap">{getActiveContent()}</p>
          )}
        </div>
      </div>
    </div>
  )
}
