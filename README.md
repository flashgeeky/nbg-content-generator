# No Boring Guns Content Generator

A Next.js application that generates SEO-optimized content for firearms and accessories using Claude Sonnet 4.5 API.

## Features

- **Two Content Types**: Brand Pages and Category Pages
- **SEO-Optimized Output**: Generates main content, meta titles, meta descriptions, and FAQ sections
- **Smart Keyword Integration**: Natural integration of primary, secondary, and semantic keywords
- **One-Click Copy**: Copy individual sections or all content at once
- **Regenerate Capability**: Easily regenerate content while keeping form data
- **Responsive Design**: Clean UI that works on desktop and mobile
- **Expert Tone**: Content written in the voice of an experienced firearms expert

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Claude Sonnet 4.5** API for content generation
- **Anthropic SDK** for API integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nbg-content-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Anthropic API key to `.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key

5. Click "Deploy"

### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable
vercel env add ANTHROPIC_API_KEY

# Deploy to production
vercel --prod
```

## Usage

### Brand Page Content

1. Select "Brand Page" content type
2. Enter the brand name as primary keyword (e.g., "Holosun")
3. Add product types in the taxonomy
4. Include secondary and semantic keywords
5. Add FAQ questions and answers
6. Select target word count
7. Optionally add refine instructions
8. Click "Generate Content"

### Category Page Content

1. Select "Category Page" content type
2. Enter the category as primary keyword (e.g., "red dot sights")
3. Add specific product types in this category
4. Include secondary and semantic keywords
5. Add FAQ questions and answers
6. Select target word count
7. Optionally add refine instructions
8. Click "Generate Content"

## Form Inputs

### Content Type
Choose between Brand Page or Category Page

### Primary Keyword (Required)
The main target keyword for SEO (e.g., "Holosun red dot sights")

### Product Types in Taxonomy
Comma-separated or multi-line list of product types
Example: `red dot sights, holographic sights, reflex sights`

### Secondary Keywords
Additional keywords to target naturally in the content

### Semantic Keywords
Related terms and LSI keywords for better SEO

### FAQ Input
Q&A pairs in this format:
```
Q: What is the best red dot sight for beginners?
A: For beginners, we recommend...

Q: How do I zero my red dot sight?
A: Zeroing your red dot involves...
```

### Target Word Count
Choose from 500, 750, 1000, or 1500 words

### Optional Refine Instructions
Additional instructions like:
- "make it more technical"
- "add more brand personality"
- "focus on competitive shooters"

## Output Sections

### Main Content
- HTML formatted with H2 and H3 headings
- Word count displayed
- Natural keyword integration
- Expert, no-fluff tone

### Meta Title
- 50-60 characters
- Ends with " | No Boring Guns"
- Optimized for search engines

### Meta Description
- 150-160 characters
- Includes primary keyword
- Clear call to action

### FAQ Section
- HTML formatted with H3 headings
- Based on provided Q&A pairs
- Expert answers

## API Rate Limits

The Claude API has rate limits. For 150+ generations per month:
- Consider implementing caching for similar requests
- Monitor your API usage in the Anthropic console
- Upgrade your API plan if needed

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key | Yes |

## Project Structure

```
nbg-content-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for content generation
│   ├── components/
│   │   ├── ContentForm.tsx       # Form component
│   │   └── ContentOutput.tsx     # Output display component
│   ├── lib/
│   │   └── prompts.ts            # Prompt templates
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── types.ts                  # TypeScript types
├── .env.example                  # Example environment variables
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── README.md                     # This file
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Error Handling

The application handles:
- Missing API key
- Rate limits (429 errors)
- Network errors
- Invalid inputs
- Timeout errors
- Authentication errors

Errors are displayed in a user-friendly format with clear messages.

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this for your projects

## Support

For issues or questions:
- Check the [Anthropic API documentation](https://docs.anthropic.com/)
- Review the [Next.js documentation](https://nextjs.org/docs)
- Open an issue in this repository

## Acknowledgments

- Built with [Claude Sonnet 4.5](https://www.anthropic.com/claude)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Next.js](https://nextjs.org/)
