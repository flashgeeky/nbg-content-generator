import { ContentFormData } from '../types'

export function buildBrandPagePrompt(formData: ContentFormData): string {
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
- Mention "No Boring Guns" or "we" naturally 2-3 times (stock info, European access, pricing in €)

ANTI-HALLUCINATION RULES (CRITICAL - NEVER VIOLATE):
- NEVER invent specific product model names unless explicitly provided in the input
- NEVER cite specific measurements, weights, or dimensions (e.g., "175mm length", "89mm barrel")
- NEVER state country of origin unless you're certain - if unsure, say "manufactured in [region]" or omit
- NEVER invent company founding stories, founder backgrounds, or specific historical dates
- NEVER cite specific prices or price ranges unless provided in the input
- NEVER describe specific technical specifications you don't have
- When you lack specific information, stay general: "various models available", "range of sizes", "competitive pricing"
- If you don't know something, don't make it up - write around it or acknowledge limited public information
- Better to be slightly vague than confidently wrong

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

HALLUCINATION EXAMPLES (NEVER DO THIS):
✗ "KMR Precision Arms builds defensive pistols in the United States" (if you don't know country of origin)
✗ "Their compact models measure around 175mm in overall length with barrel lengths typically at 89mm" (never cite specific measurements you don't have)
✗ "Founded in 2015 by two competitive shooters from the military" (never invent founding stories)
✗ "The KMR-15 Pro model features a 4.5-inch barrel" (never invent specific product model names)
✓ "They produce a range of pistol models designed for defensive use" (stay general when specifics aren't known)
✓ "The brand focuses on reliability for concealed carry and duty applications" (describe general approach, not fake specs)

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
5. Does this sound like expertise or ad copy? Fix tone if promotional.
6. HALLUCINATION CHECK: Did I invent any specific model names, measurements, specs, prices, or company history I'm not certain about? Remove all fabricated details.`
}

export function buildCategoryPagePrompt(formData: ContentFormData): string {
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

  return `Write category page content for No Boring Guns, a European firearms retailer. This is a SHOP CATEGORY PAGE, not an educational article.

CONTENT TYPE: Category Page (Ecommerce)
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
- COMMERCIAL TONE: This is a shop category page, not a blog article
- Write like a knowledgeable retailer showcasing inventory, not an educator writing a guide
- Reference "we stock", "our selection", "browse", "shop" naturally throughout
- Make it clear customers can BUY these products here
- Educational buying advice is good, but frame it around what you sell
- Acknowledge tradeoffs honestly
- Mention "No Boring Guns" or "we" 3-4 times (more than brand pages since this is YOUR category)

ANTI-HALLUCINATION RULES (CRITICAL - NEVER VIOLATE):
- NEVER invent specific product model names or brands unless you're certain they exist
- NEVER cite specific measurements, battery life hours, or technical specs you don't have
- NEVER state definitive prices - use ranges only if you're certain (e.g., "typically €200-600")
- NEVER describe specific features of products you're not sure about
- When discussing "typical" specs, use qualifiers: "generally", "often", "many models", "typically range"
- If you don't have specific information, stay educational and general
- Focus on decision criteria and what to look for, not invented product details
- Better to explain concepts than cite fake specifications

TONE - COMMERCIAL VS ARTICLE:
✗ WRONG (too article-like): "Gun optics transform how you aim and engage targets, replacing traditional iron sights with magnified systems."
✓ RIGHT (commercial): "Shop gun optics for pistols, rifles, and AK platforms. We stock red dots, magnified scopes, and complete mounting solutions."

✗ WRONG: "Understanding the relationship between optic type and mounting hardware matters..."
✓ RIGHT: "Browse our optics selection - we carry everything from red dots to tactical scopes with compatible mounts."

STRUCTURE (write full ${targetWordCount} words, commercial tone):

1. OPENING (2 paragraphs):
   - Start with what you SELL in this category, not education
   - "Shop [category] at No Boring Guns. We stock [products] for [uses]."
   - Second paragraph: Why customers buy from this category, what problems these products solve
   - Reference "our inventory", "we carry", "browse our selection"

2. H2 - PRODUCT OVERVIEW:
   - What's in this category (keep educational but frame around "what we stock")
   - Key product types customers can find here
   - Brief technical context (not a lecture)

3. H2 - BUYING GUIDE or CHOOSING [CATEGORY] (with H3 subsections):
   - Decision factors as H3s (e.g., "Mounting Options", "Optical Quality", "Budget Ranges")
   - For each: what to consider, tradeoffs, what we stock in each tier
   - Price ranges in euros (€) - reference "our" prices or typical market ranges
   - Make it helpful but commercial: "We stock options from €X to €Y"

4. H2 - SHOP BY USE CASE or APPLICATION:
   - Cover ${productTypesList} as it relates to use cases
   - Match products to different needs (competition, hunting, tactical, recreational)
   - Direct customers: "For X use, browse our Y selection" or "We recommend Z for..."
   - Mention what's in stock: "Our inventory includes..."

5. H2 - BROWSE OUR SELECTION or similar commercial heading:
   - Quick summary of what customers can find
   - Call to action: browse, shop, explore
   - Mention European stock, pricing in €, customer support

Write each section with substance but keep it commercial. Total approximately ${targetWordCount} words.

KEYWORDS: Integrate primary naturally throughout. Scatter secondary (${secondaryKeywordsList}) and semantic (${semanticKeywordsList}) where natural. Readability first.

TONE EXAMPLES:
✓ "We stock red dots from €150 to €600, covering recreational shooters to competition-grade options."
✗ "Red dot sights offer unlimited eye relief and fast acquisition. The tradeoff is limited magnification."

✓ "Browse our scope selection for hunting rifles - we carry fixed and variable magnification from trusted brands."
✗ "Magnification creates tradeoffs - higher power aids precision but narrows field of view and slows acquisition."

(Educational content is OK, but always tie it back to what you sell)

HALLUCINATION EXAMPLES (NEVER DO THIS):
✗ "Most red dots last exactly 50,000 hours on setting 8" (never cite specific numbers you don't have)
✗ "Budget models typically measure 45mm in length and weigh 85 grams" (never invent specific measurements)
✗ "The Holosun HS507C costs €320 while the Trijicon RMR runs €580" (never cite specific prices unless provided)
✗ "Premium models use the new XR-9 coating technology" (never invent technical features or terminology)
✓ "Battery life varies - premium models run for years, budget options need changes every 6-12 months" (general ranges OK)
✓ "We stock options from €150 to €600 depending on features and intended use" (broad ranges OK if certain)

META TITLE:
- Must be 55-60 characters TOTAL (including " | No Boring Guns")
- Don't make it too short (40 chars is too short, aim for 55-60)
- Include primary keyword
- Make it commercial, not "buying guide"
- Examples:
  * "Gun Optics: Red Dots, Scopes & Mounts | No Boring Guns" (58 chars) ✓
  * "Shop Rifle Scopes & Tactical Optics | No Boring Guns" (56 chars) ✓
  * "Gun Optics Buying Guide | No Boring Guns" (44 chars) ✗ TOO SHORT

META DESCRIPTION:
- Must be 155-160 characters MAXIMUM (count carefully - do not exceed 160)
- Primary keyword in first 80 characters
- Make it COMMERCIAL not educational: emphasize shop/browse/stock
- Include what you sell, who it's for, pricing mention in €, call to action
- Examples:
  * "Shop gun optics: red dots, scopes, mounts for pistols and rifles. We stock budget to premium options. European inventory, competitive pricing in €. Browse now." (160 chars) ✓
  * "Gun optics guide: choosing sights, mounts, and adapters for pistols, rifles. Compatibility, quality, and budget advice. Expert picks in €." (144 chars) ✗ TOO EDUCATIONAL

FAQ SECTION:
Use questions from input above.
- Format each question as H3
- Write 2-3 full sentences per answer (NOT just one short sentence)
- Each answer must provide UNIQUE information - no repetition
- Focus on practical buying advice, compatibility, what you stock
- Include numbers, compatibility details, practical tips

Good FAQ example:
Q: Do I need special mounts for AK optics?
A: Yes, most AK rifles need dedicated mounting solutions since they lack standard Picatinny rails. We stock side rail mounts and dust cover replacements that work with popular AK variants. Prices range from €40 for basic mounts to €120 for quick-detach systems.

OUTPUT FORMAT:
---MAIN-CONTENT-START---
[HTML with H2/H3, write full ${targetWordCount} words, commercial tone]
---MAIN-CONTENT-END---

---META-TITLE-START---
[Title 55-60 chars including " | No Boring Guns"]
---META-TITLE-END---

---META-DESCRIPTION-START---
[Description 155-160 chars maximum, commercial tone]
---META-DESCRIPTION-END---

---FAQ-SECTION-START---
[HTML: H3 questions, <p> with 2-3 sentence answers]
---FAQ-SECTION-END---

FINAL QUALITY CHECKS:
1. Did I write full ${targetWordCount} words? Count and expand sections if short.
2. Any em dashes (—)? Remove all, use only regular hyphens (-).
3. Meta title 55-60 chars (not too short)? Count it.
4. Meta description 155-160 chars and COMMERCIAL tone? Count and check tone.
5. Does this sound like a SHOP category page or an article? Make it commercial.
6. Did I reference "we stock", "browse", "shop" multiple times? Add if missing.
7. HALLUCINATION CHECK: Did I cite specific models, measurements, or specs I don't have? Remove fabricated details.`
}
