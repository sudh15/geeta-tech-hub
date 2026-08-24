// ============================================
// GEETA TECH HUB — Shared Tool Page Initializer
// ============================================

import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { renderToolCard } from '../components/tool-card.js';
import { getRelatedTools, TOOLS } from '../core/tool-registry.js';

/**
 * Initialize a tool page: header, footer, related tools, structured data
 */
export function initToolPage(toolSlug) {
  initHeader();
  initFooter();

  // Render related tools
  const relatedContainer = document.getElementById('related-tools-grid');
  if (relatedContainer) {
    const related = getRelatedTools(toolSlug);
    relatedContainer.innerHTML = related.map(renderToolCard).join('');
  }

  // Inject structured data (JSON-LD)
  const tool = TOOLS.find(t => t.slug === toolSlug);
  if (tool) {
    const baseUrl = 'https://geetatechhub.com';

    // WebApplication schema
    const appSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: tool.name,
      url: `${baseUrl}/tools/${tool.slug}/`,
      description: tool.seoDescription || tool.description,
      applicationCategory: 'Utility',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      creator: {
        '@type': 'Organization',
        name: 'Geeta Tech Hub',
        url: baseUrl,
      },
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl + '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tools',
          item: baseUrl + '/tools/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: tool.name,
          item: `${baseUrl}/tools/${tool.slug}/`,
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([appSchema, breadcrumbSchema]);
    document.head.appendChild(script);
  }
}
