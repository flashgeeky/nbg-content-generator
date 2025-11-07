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

  return `You are writing high-value content for No Boring Guns, a European firearms retailer. Your goal is to create content that genuinely helps readers while naturally optimizing for search engines.

CONTENT TYPE: Brand Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET LENGTH: ~${targetWordCount} words
${refineInstructions ? `SPECIAL FOCUS: ${refineInstructions}\n` : ''}
FAQ CONTENT:
${faqInput}

WRITING PHILOSOPHY:
Write like a knowledgeable gun shop owner who's been in the industry for 20+ years. You're having a real conversation with a customer who values your expertise. No marketing speak, no hype, no fluff.

CRITICAL STYLE REQUIREMENTS:
- Use ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Write in a direct, conversational tone - imagine explaining this to someone at the counter
- Avoid marketing clichés: "isn't just another", "when X isn't an option", "takes Y to the next level"
- Don't repeat brand names excessively - once you've established context, use "they", "their products", or refer to specific product lines
- Be specific and concrete rather than vague and promotional
- Every claim should add actual value - cut anything that sounds like ad copy

CONTENT STRUCTURE:

1. OPENING (1-2 paragraphs):
   - Establish who this brand is and why they matter
   - Focus on one distinctive characteristic or origin story detail
   - Skip the "leading manufacturer" generic openings
   - Get to what makes them different immediately

2. BRAND STORY & PHILOSOPHY (1 H2 section):
   - Real history, not marketing spin
   - What drives their design philosophy
   - Manufacturing approach or quality standards
   - Keep it factual and interesting

3. PRODUCT LINE OVERVIEW (1 H2 section with H3 subsections):
   - Cover the product types provided: ${productTypesList}
   - For each category, explain what problems these products solve
   - Include real specifications or features when relevant
   - Mention specific popular models naturally (don't force it)
   - Use H3 tags for different product categories

4. WHY STOCK THEM (1 H2 section):
   - Why No Boring Guns carries this brand
   - What customer types benefit most from their products
   - Value proposition in practical terms
   - Price references in euros (€) if relevant

5. TECHNICAL CONSIDERATIONS (if applicable):
   - Compatibility, mounting standards, common specs
   - What buyers should verify before purchasing
   - This shows expertise and builds trust

KEYWORD INTEGRATION:
- Primary keyword: Use naturally in H1 (title), first paragraph, one H2, and scattered throughout
- Secondary keywords: ${secondaryKeywordsList} - integrate where they fit naturally, don't force
- Semantic keywords: ${semanticKeywordsList} - use these to add depth and related concepts
- CRITICAL: Never stuff keywords. If a keyword doesn't fit naturally, skip it. Quality > keyword density.

TONE CALIBRATION:
✓ DO: "Their muzzle brakes use a self-timing design, which eliminates the guessing game with shim kits."
✗ DON'T: "Their revolutionary muzzle brakes aren't just another option - they're the gold standard when compromise isn't acceptable."

✓ DO: "The brand started in northern Indiana, focused on solving real problems precision shooters face."
✗ DON'T: "Founded in the heartland of America, this isn't just a company - it's a passion-driven revolution in precision."

PARAGRAPH STRUCTURE:
- Keep paragraphs 2-4 sentences each
- Each paragraph should make ONE clear point
- Use transition phrases sparingly and naturally
- Vary sentence length for readability

HTML FORMATTING:
- H2 for major sections (use clear, descriptive headings)
- H3 for subsections within product categories
- Standard <p> tags for paragraphs
- No bold, italics, or other formatting unless absolutely necessary
- No lists unless you have 3+ distinct items that truly warrant list format

META TITLE (50-60 characters):
- Include primary keyword naturally
- End with " | No Boring Guns"
- Make it click-worthy through specificity, not hype
- Example: "Area 419 Precision Rifle Parts | No Boring Guns" NOT "Area 419 - Premium Precision | No Boring Guns"

META DESCRIPTION (150-160 characters):
- Primary keyword in first half
- Specific value proposition (what makes this brand worth buying)
- Natural call to action
- Use euros (€) if mentioning price ranges
- Example: "Area 419 precision rifle accessories and reloading equipment. Modular mounting systems, muzzle devices, and competition-grade tools. European stock, competitive prices in €."

FAQ SECTION:
- Use provided Q&A pairs from: ${faqInput}
- Format each question as H3
- Answers should be detailed but direct (2-4 sentences each)
- Maintain the same expert, conversational tone
- Don't repeat information already covered in main content
- Add specific details, specs, or considerations in answers

OUTPUT FORMAT (STRICT):
Provide ONLY this format, nothing else:

---MAIN-CONTENT-START---
[HTML content with H2 and H3 tags, starting directly with first H2]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Title text only, 50-60 chars including " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Description text only, 150-160 chars]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 for questions, <p> for answers]
---FAQ-SECTION-END---

FINAL QUALITY CHECKS BEFORE OUTPUTTING:
1. Did I use em dashes anywhere? Remove them.
2. Did I repeat the brand name too often? Reduce it.
3. Does this sound like ad copy or genuine expertise? Make it genuine.
4. Would a real customer find this helpful or just SEO padding? Cut the padding.
5. Are my keywords forced or natural? Make them natural.
6. Would I say this to someone's face at the counter? If not, rewrite it.

Write content that YOU would want to read if you were researching this brand. That's the standard.`
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

  return `You are writing high-value content for No Boring Guns, a European firearms retailer. Your goal is to create content that genuinely helps buyers make informed decisions while naturally optimizing for search engines.

CONTENT TYPE: Category Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET LENGTH: ~${targetWordCount} words
${refineInstructions ? `SPECIAL FOCUS: ${refineInstructions}\n` : ''}
FAQ CONTENT:
${faqInput}

WRITING PHILOSOPHY:
Write like an experienced gun shop owner helping a customer understand a product category. You've seen what works, what doesn't, and what questions people actually ask. Skip the sales pitch - provide the information they need to make a smart purchase.

CRITICAL STYLE REQUIREMENTS:
- Use ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Write in a direct, educational tone - you're teaching, not selling
- Avoid generic phrases: "wide variety", "perfect solution", "industry-leading", "top choice"
- Don't oversell - acknowledge tradeoffs and considerations
- Be specific about features, specs, and use cases
- Every sentence should answer a real question or provide useful information

CONTENT STRUCTURE:

1. OPENING (1-2 paragraphs):
   - Define what this category is in practical terms
   - Why someone might need products in this category
   - Skip the "essential equipment" generic openings
   - Set context for the buying guidance that follows

2. UNDERSTANDING THE CATEGORY (1 H2 section):
   - What these products do and why they exist
   - Key variations or types within the category
   - Common misconceptions or confusion points
   - Real-world applications and use cases
   - Technical fundamentals a buyer should understand

3. BUYING GUIDE (1 H2 section with H3 subsections):
   - Break down decision factors as H3 subsections
   - Examples: "Mounting Systems", "Optical Quality", "Magnification Range"
   - For each factor: why it matters, what to look for, tradeoffs
   - Include specific specs or measurements when relevant
   - Mention price ranges in euros (€) if helpful for context

4. PRODUCT TYPES & OPTIONS (1 H2 section):
   - Cover the specific product types: ${productTypesList}
   - For each type, explain what situations favor it
   - Common brands or models (naturally, not forced)
   - Price vs. performance considerations
   - Who these products suit best

5. COMMON MISTAKES TO AVOID (optional H2):
   - Real pitfalls buyers encounter
   - Compatibility issues or overlooked factors
   - This demonstrates genuine expertise

6. CHOOSING FOR YOUR NEEDS (1 H2 section):
   - Different user profiles (competition, hunting, tactical, recreational)
   - Match product types to specific needs
   - Budget allocation guidance if relevant
   - When to prioritize which features

KEYWORD INTEGRATION:
- Primary keyword: ${primaryKeyword} - use naturally throughout, especially in first paragraph and H2 headings
- Secondary keywords: ${secondaryKeywordsList} - integrate where contextually appropriate
- Semantic keywords: ${semanticKeywordsList} - use to expand topic coverage naturally
- CRITICAL: Prioritize readability over keyword placement. Force nothing.

TONE CALIBRATION:
✓ DO: "Red dot sights offer unlimited eye relief and fast target acquisition. The tradeoff is limited magnification, typically 1x or up to 3x."
✗ DON'T: "Red dot sights aren't just accessories - they're game-changing optics that take your shooting to the next level with unlimited eye relief."

✓ DO: "Budget €200-400 for reliable red dots. Competition-grade models run €500-800. The difference is mostly in glass clarity and durability under recoil."
✗ DON'T: "While budget options exist, serious shooters know that investing in premium red dots isn't an expense - it's an investment in performance."

PARAGRAPH STRUCTURE:
- Keep paragraphs focused on ONE concept
- 2-4 sentences per paragraph typically
- Lead with the main point, then support it
- Use concrete examples instead of vague statements
- Vary sentence length but keep everything readable

HTML FORMATTING:
- H2 for major sections (clear, descriptive headings)
- H3 for subsections within buying guide and product types
- Standard <p> tags for paragraphs
- No unnecessary formatting
- Use lists ONLY when you have 3+ distinct items that benefit from list format (like comparing feature sets)

META TITLE (50-60 characters):
- Include primary keyword
- End with " | No Boring Guns"
- Be specific about what makes this guide valuable
- Example: "Red Dot Sights Guide & Reviews | No Boring Guns" NOT "Best Red Dots - Ultimate Guide | No Boring Guns"

META DESCRIPTION (150-160 characters):
- Primary keyword in first 80 characters
- Highlight specific value (what questions this answers)
- Natural call to action
- Example: "Complete red dot sight guide: how to choose, what to look for, and top options for hunting, competition, and tactical use. Expert recommendations in €."

FAQ SECTION:
- Use provided Q&A pairs from: ${faqInput}
- Format each question as H3
- Answers should be practical and specific (2-5 sentences)
- Maintain educational, helpful tone
- Address real concerns buyers have
- Include specs, compatibility info, or practical tips in answers

OUTPUT FORMAT (STRICT):
Provide ONLY this format, nothing else:

---MAIN-CONTENT-START---
[HTML content with H2 and H3 tags, starting directly with first H2]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Title text only, 50-60 chars including " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Description text only, 150-160 chars]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 for questions, <p> for answers]
---FAQ-SECTION-END---

FINAL QUALITY CHECKS BEFORE OUTPUTTING:
1. Did I use em dashes anywhere? Remove them - use regular hyphens only.
2. Does this actually help someone make a buying decision? If not, add value.
3. Are there specific details (specs, prices, features) or just vague claims? Add specifics.
4. Would a knowledgeable customer find errors or oversimplifications? Fix them.
5. Are keywords forced or do they flow naturally? Make them flow.
6. Does any sentence sound like marketing copy? Rewrite it as education.
7. Did I acknowledge tradeoffs and considerations? Buyers trust honest guidance.

Write content that provides genuine buying guidance - the kind you'd want if you were spending your own money on these products. Don't write content you'd skip past if you were researching online.`
}
