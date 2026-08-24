// ============================================
// GEETA TECH HUB — Tool Registry & Data
// ============================================

export const TOOLS = [
  {
    name: 'Word Counter',
    slug: 'word-counter',
    description: 'Count words, sentences, paragraphs and estimate reading time.',
    category: 'Text',
    categorySlug: 'text',
    icon: '📝',
    status: 'live',
    featured: true,
    trending: true,
    popular: true,
    dateAdded: '2026-01-15',
    privacyLocal: true,
    relatedTools: ['character-counter', 'case-converter', 'slug-generator'],
    seoTitle: 'Word Counter Online — Free & Instant | Geeta Tech Hub',
    seoDescription: 'Count words, characters, sentences and paragraphs online for free. Estimate reading time. No login required.',
  },
  {
    name: 'Character Counter',
    slug: 'character-counter',
    description: 'Count characters with and without spaces. Track limits for Twitter, Meta and more.',
    category: 'Text',
    categorySlug: 'text',
    icon: '🔤',
    status: 'live',
    featured: false,
    trending: false,
    popular: true,
    dateAdded: '2026-01-15',
    privacyLocal: true,
    relatedTools: ['word-counter', 'case-converter', 'slug-generator'],
    seoTitle: 'Character Counter Online — Free & Instant | Geeta Tech Hub',
    seoDescription: 'Count characters with and without spaces online for free. Check social media character limits instantly.',
  },
  {
    name: 'Case Converter',
    slug: 'case-converter',
    description: 'Convert text to uppercase, lowercase, title case, sentence case and more.',
    category: 'Text',
    categorySlug: 'text',
    icon: 'Aa',
    status: 'live',
    featured: true,
    trending: false,
    popular: true,
    dateAdded: '2026-01-20',
    privacyLocal: true,
    relatedTools: ['word-counter', 'slug-generator', 'character-counter'],
    seoTitle: 'Case Converter Online — Free Text Case Changer | Geeta Tech Hub',
    seoDescription: 'Convert text to uppercase, lowercase, title case and sentence case online for free. No login required.',
  },
  {
    name: 'Slug Generator',
    slug: 'slug-generator',
    description: 'Create clean, SEO-friendly URL slugs from any text.',
    category: 'SEO',
    categorySlug: 'seo',
    icon: '🔗',
    status: 'live',
    featured: false,
    trending: false,
    popular: true,
    dateAdded: '2026-01-20',
    privacyLocal: true,
    relatedTools: ['meta-description-generator', 'case-converter', 'word-counter'],
    seoTitle: 'Slug Generator Online — Create SEO-Friendly URLs | Geeta Tech Hub',
    seoDescription: 'Generate clean URL slugs from any text. Create SEO-friendly permalinks for your blog posts and pages.',
  },
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    description: 'Format, validate and beautify JSON data with syntax highlighting.',
    category: 'Developer',
    categorySlug: 'developer',
    icon: '{ }',
    status: 'live',
    featured: true,
    trending: true,
    popular: true,
    dateAdded: '2026-01-25',
    privacyLocal: true,
    relatedTools: ['base64-encoder-decoder', 'slug-generator', 'word-counter'],
    seoTitle: 'JSON Formatter & Validator Online — Free | Geeta Tech Hub',
    seoDescription: 'Format, validate and beautify JSON data online for free. Syntax highlighting and error detection included.',
  },
  {
    name: 'Base64 Encoder / Decoder',
    slug: 'base64-encoder-decoder',
    description: 'Encode text to Base64 or decode Base64 strings instantly.',
    category: 'Developer',
    categorySlug: 'developer',
    icon: '🔐',
    status: 'live',
    featured: false,
    trending: false,
    popular: false,
    dateAdded: '2026-02-01',
    privacyLocal: true,
    relatedTools: ['json-formatter', 'password-generator', 'slug-generator'],
    seoTitle: 'Base64 Encoder / Decoder Online — Free | Geeta Tech Hub',
    seoDescription: 'Encode or decode Base64 strings online for free. Fast browser-based Base64 conversion with no login required.',
  },
  {
    name: 'QR Code Generator',
    slug: 'qr-code-generator',
    description: 'Create downloadable QR codes for URLs, text, Wi-Fi and more.',
    category: 'Utilities',
    categorySlug: 'utilities',
    icon: '📱',
    status: 'live',
    featured: true,
    trending: true,
    popular: true,
    dateAdded: '2026-02-05',
    privacyLocal: true,
    relatedTools: ['password-generator', 'slug-generator', 'meta-description-generator'],
    seoTitle: 'QR Code Generator Online — Free & Downloadable | Geeta Tech Hub',
    seoDescription: 'Create and download QR codes for free. Generate QR codes for URLs, text, Wi-Fi and more. No login required.',
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    description: 'Generate secure random passwords with custom length and complexity.',
    category: 'Utilities',
    categorySlug: 'utilities',
    icon: '🔑',
    status: 'live',
    featured: true,
    trending: false,
    popular: true,
    dateAdded: '2026-02-10',
    privacyLocal: true,
    relatedTools: ['base64-encoder-decoder', 'qr-code-generator', 'json-formatter'],
    seoTitle: 'Password Generator Online — Secure & Free | Geeta Tech Hub',
    seoDescription: 'Generate secure random passwords with custom length and character types. All processing happens in your browser.',
  },
  {
    name: 'Image Compressor',
    slug: 'image-compressor',
    description: 'Compress JPG, PNG and WebP images directly in your browser.',
    category: 'Image',
    categorySlug: 'image',
    icon: '🖼️',
    status: 'live',
    featured: true,
    trending: true,
    popular: true,
    dateAdded: '2026-02-15',
    privacyLocal: true,
    relatedTools: ['image-resizer', 'image-converter', 'meta-description-generator'],
    seoTitle: 'Image Compressor Online — Free & Fast | Geeta Tech Hub',
    seoDescription: 'Compress JPG, PNG and WebP images online for free. Fast browser-based image compression with no login required.',
  },
  {
    name: 'Image Resizer',
    slug: 'image-resizer',
    description: 'Resize images to exact dimensions or percentages in your browser.',
    category: 'Image',
    categorySlug: 'image',
    icon: '📐',
    status: 'live',
    featured: false,
    trending: false,
    popular: true,
    dateAdded: '2026-02-15',
    privacyLocal: true,
    relatedTools: ['image-compressor', 'image-converter', 'qr-code-generator'],
    seoTitle: 'Image Resizer Online — Free & Fast | Geeta Tech Hub',
    seoDescription: 'Resize images to any dimension online for free. Maintain aspect ratio or set custom sizes. No upload needed.',
  },
  {
    name: 'Image Converter',
    slug: 'image-converter',
    description: 'Convert images between JPG, PNG, WebP and BMP formats.',
    category: 'Image',
    categorySlug: 'image',
    icon: '🔄',
    status: 'live',
    featured: false,
    trending: false,
    popular: false,
    dateAdded: '2026-02-20',
    privacyLocal: true,
    relatedTools: ['image-compressor', 'image-resizer', 'qr-code-generator'],
    seoTitle: 'Image Converter Online — JPG, PNG, WebP | Geeta Tech Hub',
    seoDescription: 'Convert images between JPG, PNG, WebP and BMP formats online for free. Browser-based, no upload required.',
  },
  {
    name: 'Meta Description Generator',
    slug: 'meta-description-generator',
    description: 'Generate SEO-friendly meta descriptions for your web pages.',
    category: 'SEO',
    categorySlug: 'seo',
    icon: '🏷️',
    status: 'live',
    featured: true,
    trending: false,
    popular: true,
    dateAdded: '2026-02-25',
    privacyLocal: true,
    relatedTools: ['slug-generator', 'word-counter', 'character-counter'],
    seoTitle: 'Meta Description Generator — Free SEO Tool | Geeta Tech Hub',
    seoDescription: 'Generate compelling meta descriptions for SEO. Preview Google search results and optimize click-through rates.',
  },
];

export const CATEGORIES = [
  { name: 'All', slug: 'all', icon: '⚡', color: '#06b6d4' },
  { name: 'Text', slug: 'text', icon: '📝', color: '#8b5cf6' },
  { name: 'Image', slug: 'image', icon: '🖼️', color: '#ec4899' },
  { name: 'SEO', slug: 'seo', icon: '🔍', color: '#10b981' },
  { name: 'Developer', slug: 'developer', icon: '💻', color: '#f59e0b' },
  { name: 'Utilities', slug: 'utilities', icon: '🛠️', color: '#06b6d4' },
  { name: 'AI', slug: 'ai', icon: '🤖', color: '#a78bfa', comingSoon: true },
  { name: 'PDF', slug: 'pdf', icon: '📄', color: '#ef4444', comingSoon: true },
  { name: 'Social Media', slug: 'social-media', icon: '📣', color: '#3b82f6', comingSoon: true },
  { name: 'Calculators', slug: 'calculators', icon: '🧮', color: '#14b8a6', comingSoon: true },
];

// Helper functions
export function getToolBySlug(slug) {
  return TOOLS.find(t => t.slug === slug);
}

export function getToolsByCategory(categorySlug) {
  if (categorySlug === 'all') return TOOLS.filter(t => t.status === 'live');
  return TOOLS.filter(t => t.categorySlug === categorySlug && t.status === 'live');
}

export function getFeaturedTools() {
  return TOOLS.filter(t => t.featured && t.status === 'live');
}

export function getTrendingTools() {
  return TOOLS.filter(t => t.trending && t.status === 'live');
}

export function getPopularTools() {
  return TOOLS.filter(t => t.popular && t.status === 'live');
}

export function getRecentTools() {
  return [...TOOLS]
    .filter(t => t.status === 'live')
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
}

export function getRelatedTools(slug) {
  const tool = getToolBySlug(slug);
  if (!tool) return [];
  return tool.relatedTools.map(s => getToolBySlug(s)).filter(Boolean);
}

export function searchTools(query) {
  const q = query.toLowerCase().trim();
  if (!q) return TOOLS.filter(t => t.status === 'live');
  return TOOLS.filter(t =>
    t.status === 'live' && (
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    )
  );
}

export function getActiveCategories() {
  const active = new Set(TOOLS.filter(t => t.status === 'live').map(t => t.categorySlug));
  return CATEGORIES.filter(c => c.slug === 'all' || active.has(c.slug) || c.comingSoon);
}
