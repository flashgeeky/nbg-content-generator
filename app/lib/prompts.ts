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

  return `Write expert content for No Boring Guns, a European firearms retailer. Tone: experienced gun shop owner, direct and factual.

CONTENT TYPE: Brand Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET LENGTH: ${targetWordCount} words (MUST achieve this - write full content, not summaries)
${refineInstructions ? `FOCUS: ${refineInstructions}\n` : ''}
FAQ INPUT:
${faqInput}

CRITICAL RULES:
- ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Conversational, direct tone - like talking to a customer at the counter
- Avoid clichés: "isn't just another", "when X isn't an option", "takes Y to the next level"
- After establishing brand name, vary with "they/their products/the company"
- Be specific with real details (specs, features, compatibility) not vague promotional claims
- Mention "No Boring Guns" or "we" naturally 2-3 times (stock info, European access, pricing in €)

STRUCTURE (write full ${targetWordCount} words across all sections):

1. OPENING (2 paragraphs): Who this brand is, what makes them distinctive. Skip "leading manufacturer" clichés.

2. H2 - BRAND STORY: Real history, design philosophy, manufacturing approach. Keep factual and interesting.

3. H2 - PRODUCT LINEUP (with H3 subsections): Cover ${productTypesList}. For each category, explain what problems they solve, include real specs/features, mention specific popular models naturally.

4. H2 - WHY WE STOCK: Why No Boring Guns carries this brand, what customer types benefit most, value proposition in practical terms, price references in euros (€).

5. H2 - TECHNICAL NOTES (if applicable): Compatibility, mounting standards, common specs, what buyers should verify before purchasing.

Write each section with substance. The total must be approximately ${targetWordCount} words.

KEYWORDS: Integrate primary naturally in opening + one H2 heading. Scatter secondary (${secondaryKeywordsList}) and semantic (${semanticKeywordsList}) throughout where they fit. Never force.

TONE EXAMPLES:
✓ "They manufacture in-house at their Indiana facility, controlling the tolerances that matter for precision work."
✗ "This isn't just a company - it's a passion-driven revolution when compromise isn't an option."

META TITLE:
- Must be 50-60 characters TOTAL (including " | No Boring Guns")
- Include primary keyword naturally
- Be specific, not hyped
- Example: "Area 419 Precision Parts | No Boring Guns" (44 chars)

META DESCRIPTION:
- Must be 150-160 characters MAXIMUM (count carefully - do not exceed 160)
- Include primary keyword in first 80 characters
- Specific value proposition
- Natural call to action
- Use € for pricing
- Example: "Area 419 precision rifle accessories: modular mounting systems, muzzle devices, reloading equipment. European stock, competitive prices in €. Shop now." (159 chars)

FAQ SECTION:
Use questions from input above.
- Format each question as H3
- Write 2-3 full sentences per answer (NOT just one short sentence)
- Each answer must provide UNIQUE practical information
- Skip questions that are too similar - only keep distinct ones
- Include specific details: specs, timeframes, compatibility, practical considerations

Good FAQ example:
Q: Where is Area 419 from?
A: Area 419 is based in northern Indiana, where they handle both design and manufacturing operations. The company was founded by competitive precision shooters who wanted better accessories than what was commercially available. All products are CNC machined domestically with tight tolerance control for consistency across production runs.

OUTPUT FORMAT:
---MAIN-CONTENT-START---
[HTML content with H2 and H3 tags, write full ${targetWordCount} words]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Title text, 50-60 chars including " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Description text, 150-160 chars maximum - count carefully]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 for questions, <p> tags with 2-3 sentence answers]
---FAQ-SECTION-END---

FINAL QUALITY CHECKS:
1. Did I write full ${targetWordCount} words? Count and expand sections if short.
2. Any em dashes (—)? Remove all, use only regular hyphens (-).
3. Meta description under 160 characters? Count it precisely.
4. FAQ answers have 2-3 sentences with real details? Expand if too brief.
5. Does this sound like expertise or ad copy? Fix tone if promotional.`
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

  return `Write expert buying guide for No Boring Guns, a European firearms retailer. Tone: experienced shop owner helping customer understand a category.

CONTENT TYPE: Category Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET LENGTH: ${targetWordCount} words (MUST achieve this - write comprehensive content)
${refineInstructions ? `FOCUS: ${refineInstructions}\n` : ''}
FAQ INPUT:
${faqInput}

CRITICAL RULES:
- ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Educational, direct tone - teaching not selling
- Avoid generic phrases: "wide variety", "perfect solution", "industry-leading", "top choice"
- Acknowledge tradeoffs and considerations - don't oversell
- Be specific about features, specs, and use cases
- Every sentence should answer a real question or provide useful information
- Mention "No Boring Guns" or "we" naturally 2-3 times (selection, pricing in €, recommendations)

STRUCTURE (write full ${targetWordCount} words across all sections):

1. OPENING (1-2 paragraphs): Define category in practical terms, why someone might need products in this category. Skip generic "essential equipment" openings.

2. H2 - UNDERSTANDING [CATEGORY]: What these products do and why they exist, key variations within category, common misconceptions, real-world applications, technical fundamentals buyers should understand.

3. H2 - BUYING GUIDE (with H3 subsections): Break down decision factors as H3s (e.g., "Mounting Systems", "Optical Quality", "Magnification Range"). For each: why it matters, what to look for, tradeoffs. Include specific specs or measurements. Mention price ranges in euros (€).

4. H2 - PRODUCT TYPES & OPTIONS: Cover ${productTypesList}. For each type, explain what situations favor it, common brands/models naturally mentioned, price vs performance considerations, who these suit best.

5. H2 - CHOOSING FOR YOUR NEEDS: Different user profiles (competition, hunting, tactical, recreational). Match product types to specific needs, budget allocation guidance.

Write each section with depth. Total must be approximately ${targetWordCount} words.

KEYWORDS: Integrate primary naturally throughout, especially first paragraph and H2 headings. Use secondary (${secondaryKeywordsList}) and semantic (${semanticKeywordsList}) contextually. Prioritize readability over keyword placement.

TONE EXAMPLES:
✓ "Red dot sights offer unlimited eye relief and fast target acquisition. The tradeoff is limited magnification, typically 1x or up to 3x."
✗ "Red dot sights aren't just accessories - they're game-changing optics that take your shooting to the next level."

META TITLE:
- Must be 50-60 characters TOTAL (including " | No Boring Guns")
- Include primary keyword
- Be specific about what makes this guide valuable
- Example: "Red Dot Sights Buying Guide | No Boring Guns" (48 chars)

META DESCRIPTION:
- Must be 150-160 characters MAXIMUM (count carefully - do not exceed 160)
- Primary keyword in first 80 characters
- Highlight specific value (what questions this answers)
- Natural call to action
- Example: "Red dot sight guide: how to choose, what to look for, top options for hunting, competition, and tactical use. Expert recommendations in €." (144 chars)

FAQ SECTION:
Use questions from input above.
- Format each question as H3
- Write 2-3 full sentences per answer (NOT just one short sentence)
- Each answer must provide UNIQUE information - no repetition between questions
- Focus on practical buying advice, compatibility notes, specific use cases
- Include specific numbers, compatibility details, practical tips

Good FAQ example:
Q: How long do red dot batteries last?
A: Most red dot sights use CR2032 batteries that last 2,000-50,000 hours depending on brightness setting and model. Premium models like Aimpoint can run for years on medium brightness. Budget models typically need battery changes every 6-12 months with regular use.

OUTPUT FORMAT:
---MAIN-CONTENT-START---
[HTML content with H2 and H3 tags, write full ${targetWordCount} words]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Title text, 50-60 chars including " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Description text, 150-160 chars maximum - count carefully]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 for questions, <p> tags with 2-3 sentence answers]
---FAQ-SECTION-END---

FINAL QUALITY CHECKS:
1. Did I write full ${targetWordCount} words? Count and expand sections if short.
2. Any em dashes (—)? Remove all, use only regular hyphens (-).
3. Meta description under 160 characters? Count it precisely.
4. FAQ answers have 2-3 sentences with practical details? Expand if too brief.
5. Does this actually help buying decisions? Add value if too vague.`
}
