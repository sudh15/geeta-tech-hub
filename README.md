# Geeta Tech Hub

**Free Web Tools & Professional Web Services**

A modern, lightweight, static-first web platform combining free browser-based tools and professional web design services. Built with Vite + Vanilla JS for maximum performance. Optimized for Cloudflare Pages.

## Tech Stack

- **Build:** Vite (MPA mode)
- **Frontend:** Vanilla JavaScript, Vanilla CSS
- **Fonts:** Inter (Google Fonts)
- **Dependencies:** `qrcode` (QR generation), `browser-image-compression` (image tools)
- **Deployment:** Cloudflare Pages (static)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output directory: `dist/`

### Preview Production Build

```bash
npm run preview
```

## Cloudflare Pages Deployment

1. Push the project to a GitHub repository
2. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages**
3. Connect your GitHub repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy

Cloudflare Pages will automatically deploy on every push to your main branch.

## Project Structure

```
├── index.html                        # Homepage
├── tools/
│   ├── index.html                    # Tools directory
│   ├── word-counter/index.html
│   ├── character-counter/index.html
│   ├── case-converter/index.html
│   ├── slug-generator/index.html
│   ├── json-formatter/index.html
│   ├── base64-encoder-decoder/index.html
│   ├── qr-code-generator/index.html
│   ├── password-generator/index.html
│   ├── image-compressor/index.html
│   ├── image-resizer/index.html
│   ├── image-converter/index.html
│   └── meta-description-generator/index.html
├── services/index.html
├── about/index.html
├── blog/index.html
├── contact/index.html
├── privacy/index.html
├── terms/index.html
├── src/
│   ├── styles/
│   │   ├── design-system.css         # CSS variables, reset, typography
│   │   ├── components.css            # Buttons, cards, badges, inputs
│   │   ├── layout.css                # Header, footer, hero, grid
│   │   └── tools.css                 # Tool-specific styles
│   ├── js/
│   │   ├── core/
│   │   │   ├── tool-registry.js      # Tool metadata & helpers
│   │   │   └── utils.js              # Clipboard, download, toast, etc.
│   │   ├── components/
│   │   │   ├── header.js             # Header + mobile menu
│   │   │   ├── footer.js             # Footer
│   │   │   └── tool-card.js          # Tool card + grid
│   │   └── tools/
│   │       └── shared.js             # Shared tool page initializer
│   └── home.js                       # Homepage entry point
├── vite.config.js
└── package.json
```

## How to Add a New Tool

### 1. Add Tool Metadata

Edit `src/js/core/tool-registry.js` and add a new entry to the `TOOLS` array:

```js
{
  name: 'My New Tool',
  slug: 'my-new-tool',
  description: 'What this tool does.',
  category: 'Text',        // Must match a category
  categorySlug: 'text',
  icon: '🔧',
  status: 'live',
  featured: false,
  trending: false,
  popular: false,
  dateAdded: '2026-03-01',
  privacyLocal: true,
  relatedTools: ['word-counter', 'case-converter'],
  seoTitle: 'My New Tool Online — Free | Geeta Tech Hub',
  seoDescription: 'Description for search engines.',
}
```

### 2. Create the Tool Page

Create `tools/my-new-tool/index.html` following the existing tool page structure:
- SEO meta tags
- Breadcrumb
- Tool interface
- Privacy badge
- SEO content (what, how, why)
- Related tools section

### 3. Register in Vite Config

Add the new page to `vite.config.js` rollup inputs:

```js
'tool-my-new-tool': resolve(__dirname, 'tools/my-new-tool/index.html'),
```

### 4. Test

```bash
npm run dev
```

Visit the new tool page and verify everything works.

## How to Edit Tool Metadata

All tool metadata lives in `src/js/core/tool-registry.js`. Edit the `TOOLS` array to change:
- Names, descriptions, icons
- Category assignments
- Featured/trending/popular flags
- Related tools
- SEO metadata

## How to Modify Categories

Edit the `CATEGORIES` array in `src/js/core/tool-registry.js`:

```js
{ name: 'New Category', slug: 'new-category', icon: '📌', color: '#06b6d4' }
```

Add `comingSoon: true` for categories with no tools yet.

## How to Update Navigation

Edit `src/js/components/header.js` to modify navigation links.
Edit `src/js/components/footer.js` to modify footer links.

## Environment Variables

No environment variables are required for the core website. If you add tools that require API keys in the future, use Vite's `.env` file:

```
VITE_API_KEY=your_key_here
```

Access in code: `import.meta.env.VITE_API_KEY`

## License

© 2026 Geeta Tech Hub. All rights reserved.
