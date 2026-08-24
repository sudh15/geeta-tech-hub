// ============================================
// GEETA TECH HUB — Homepage App
// ============================================

import { initHeader } from './js/components/header.js';
import { initFooter } from './js/components/footer.js';
import { renderToolCard } from './js/components/tool-card.js';
import { getFeaturedTools, getTrendingTools, CATEGORIES } from './js/core/tool-registry.js';

// Initialize layout
initHeader();
initFooter();

// Render featured tools
const featuredGrid = document.getElementById('featured-tools-grid');
if (featuredGrid) {
  const featured = getFeaturedTools();
  featuredGrid.innerHTML = featured.map(renderToolCard).join('');
}

// Render trending tools
const trendingGrid = document.getElementById('trending-tools-grid');
if (trendingGrid) {
  const trending = getTrendingTools();
  trendingGrid.innerHTML = trending.map(renderToolCard).join('');
}

// Render categories
const categoriesGrid = document.getElementById('categories-grid');
if (categoriesGrid) {
  const cats = CATEGORIES.filter(c => c.slug !== 'all');
  categoriesGrid.innerHTML = cats.map(cat => `
    <a href="/tools/#${cat.slug}" class="card card--interactive category-card ${cat.comingSoon ? 'card--flat' : ''}">
      <div class="category-card__icon" style="background: ${cat.color}20; color: ${cat.color};">${cat.icon}</div>
      <div>
        <div class="category-card__name">${cat.name}${cat.comingSoon ? ' <span class="badge badge--new" style="font-size:0.65rem;padding:2px 8px;">Soon</span>' : ''}</div>
      </div>
    </a>
  `).join('');
}
