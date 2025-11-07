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

  return `Write expert content for No Boring Guns, a European firearms retailer. Create genuinely helpful content that naturally optimizes for search.

CONTENT TYPE: Brand Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET: ~${targetWordCount} words
${refineInstructions ? `FOCUS: ${refineInstructions}\n` : ''}
FAQ INPUT:
${faqInput}

TONE & STYLE:
Write as a knowledgeable gun shop owner at No Boring Guns with 20+ years experience. Direct, conversational, expert - no marketing fluff.

CRITICAL RULES:
- Use ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Avoid: "isn't just another", "when X isn't an option", "takes Y to the next level", "leading manufacturer"
- Don't repeat brand names excessively - use "they", "their products" after establishing context
- Be specific and concrete, not vague and promotional
- Every claim must add real value

NO BORING GUNS MENTIONS:
Naturally mention "No Boring Guns" or "we" 2-3 times throughout:
- "At No Boring Guns, we stock the complete lineup because..."
- "We carry both options, letting European shooters choose based on..."
- "Available through us with competitive euro pricing"

STRUCTURE:

1. OPENING (1-2 paragraphs):
   - Who this brand is and why they matter
   - One distinctive characteristic or origin detail
   - Skip generic "leading manufacturer" openings

2. BRAND STORY (1 H2 section):
   - Real history and design philosophy
   - Manufacturing approach or quality standards
   - Keep factual and interesting

3. PRODUCT LINES (1 H2 with H3 subsections):
   - Cover: ${productTypesList}
   - For each: problems solved, key features, popular models
   - Use H3 for different product categories

4. WHY STOCK THEM (1 H2):
   - Why No Boring Guns carries this brand
   - Customer types who benefit most
   - Value proposition with euro (€) pricing context

5. TECHNICAL NOTES (if relevant):
   - Compatibility, specs, what buyers should verify

KEYWORDS:
- Primary (${primaryKeyword}): Use in first paragraph, one H2, scattered naturally
- Secondary (${secondaryKeywordsList}): Integrate where natural
- Semantic (${semanticKeywordsList}): Add depth and related concepts
- Never stuff keywords - quality over density

TONE EXAMPLES:
✓ "Their muzzle brakes use self-timing design, eliminating shim kit guessing."
✗ "Their revolutionary brakes aren't just another option - they're the gold standard."

✓ "Started in northern Indiana, solving real precision shooter problems."
✗ "Founded in America's heartland, this passion-driven revolution in precision."

FORMATTING:
- H2 for major sections
- H3 for product category subsections
- Standard <p> tags
- No bold/italics unless necessary
- 2-4 sentences per paragraph

META TITLE (50-60 chars):
- Include primary keyword naturally
- End with " | No Boring Guns"
- Specific, not hype
- Example: "Area 419 Precision Parts | No Boring Guns"

META DESCRIPTION (150-160 chars):
- Primary keyword in first half
- Specific value proposition
- Natural call to action
- Use euros (€) if mentioning prices
- Example: "Area 419 precision rifle accessories and reloading equipment. Modular mounting systems, muzzle devices, competition tools. European stock, competitive €."

FAQ:
- Use provided Q&A from input
- H3 for each question
- 1-2 sentences max per answer (3 max)
- Each answer must provide UNIQUE info
- Skip redundant questions
- Maintain expert, direct tone
- Add specs or practical details

OUTPUT FORMAT:
---MAIN-CONTENT-START---
[HTML with H2/H3 tags]
---MAIN-CONTENT-END---

---META-TITLE-START---
[50-60 chars with " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[150-160 chars]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 questions, <p> answers]
---FAQ-SECTION-END---

FINAL CHECKS:
1. No em dashes anywhere
2. Brand name not repeated excessively
3. Sounds like expertise, not ad copy
4. Keywords natural, not forced
5. Would you say this to someone's face? If not, rewrite.`
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

  return `Write expert content for No Boring Guns, a European firearms retailer. Create buying guidance that helps customers make informed decisions while naturally optimizing for search.

CONTENT TYPE: Category Page
PRIMARY KEYWORD: ${primaryKeyword}
PRODUCT TYPES: ${productTypesList}
SECONDARY KEYWORDS: ${secondaryKeywordsList}
SEMANTIC KEYWORDS: ${semanticKeywordsList}
TARGET: ~${targetWordCount} words
${refineInstructions ? `FOCUS: ${refineInstructions}\n` : ''}
FAQ INPUT:
${faqInput}

TONE & STYLE:
Write as an experienced gun shop owner at No Boring Guns helping customers understand a category. Teaching, not selling. Provide information for smart purchasing decisions.

CRITICAL RULES:
- Use ONLY regular hyphens (-), NEVER em dashes (—) or en dashes (–)
- Avoid: "wide variety", "perfect solution", "industry-leading", "top choice"
- Acknowledge tradeoffs and considerations - don't oversell
- Be specific about features, specs, use cases
- Every sentence should answer a real question

NO BORING GUNS MENTIONS:
Naturally mention "No Boring Guns" or "we" 2-3 times:
- "We stock options from €200 to €800, covering recreational to competition-grade"
- "At No Boring Guns, our inventory focuses on quality European-suitable brands"
- "Available through us with competitive pricing in euros"

STRUCTURE:

1. OPENING (1-2 paragraphs):
   - Define category in practical terms
   - Why someone needs these products
   - Set context for buying guidance

2. UNDERSTANDING THE CATEGORY (1 H2):
   - What these products do and why they exist
   - Key variations or types
   - Common misconceptions
   - Real-world applications

3. BUYING GUIDE (1 H2 with H3 subsections):
   - Break decision factors into H3s: "Mounting Systems", "Magnification", etc.
   - For each: why it matters, what to look for, tradeoffs
   - Include specific specs or measurements
   - Mention euro (€) price ranges for context

4. PRODUCT TYPES (1 H2):
   - Cover: ${productTypesList}
   - For each: ideal situations, common brands/models, price vs performance
   - Who each type suits best

5. CHOOSING FOR YOUR NEEDS (1 H2):
   - Different user profiles: competition, hunting, tactical, recreational
   - Match product types to needs
   - Budget allocation guidance

KEYWORDS:
- Primary (${primaryKeyword}): First paragraph, H2 headings, throughout
- Secondary (${secondaryKeywordsList}): Where contextually appropriate
- Semantic (${semanticKeywordsList}): Expand topic naturally
- Readability over keyword placement always

TONE EXAMPLES:
✓ "Red dots offer unlimited eye relief and fast acquisition. Tradeoff: limited magnification, typically 1x to 3x."
✗ "Red dots aren't just accessories - they're game-changing optics that take shooting to the next level."

✓ "Budget €200-400 for reliable red dots. Competition models run €500-800. Difference is mainly glass clarity and recoil durability."
✗ "While budget options exist, serious shooters know premium red dots aren't expenses - they're investments."

FORMATTING:
- H2 for major sections
- H3 for buying guide subsections and product types
- Standard <p> tags
- 2-4 sentences per paragraph
- Use lists ONLY for 3+ distinct items

META TITLE (50-60 chars):
- Include primary keyword
- End with " | No Boring Guns"
- Specific value
- Example: "Red Dot Sights Guide & Reviews | No Boring Guns"

META DESCRIPTION (150-160 chars):
- Primary keyword in first 80 chars
- Highlight specific value
- Natural call to action
- Example: "Complete red dot sight guide: how to choose, what to look for, and top options for hunting, competition, and tactical use. Expert recommendations in €."

FAQ:
- Use provided Q&A from input
- H3 for each question
- 1-2 sentences max per answer (3 max)
- Each answer must provide UNIQUE info
- Skip redundant questions
- Focus on practical buying advice, compatibility, use cases
- Include specific numbers or details

OUTPUT FORMAT:
---MAIN-CONTENT-START---
[HTML with H2/H3 tags]
---MAIN-CONTENT-END---

---META-TITLE-START---
[50-60 chars with " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[150-160 chars]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML with H3 questions, <p> answers]
---FAQ-SECTION-END---

FINAL CHECKS:
1. No em dashes - only regular hyphens
2. Specific details (specs, prices, features), not vague claims
3. Tradeoffs acknowledged - buyers trust honest guidance
4. Keywords flow naturally
5. Sounds educational, not marketing`
}
