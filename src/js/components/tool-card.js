// ============================================
// GEETA TECH HUB — Tool Card Component
// ============================================

/**
 * Render a single tool card
 */
export function renderToolCard(tool) {
  return `
    <a href="/tools/${tool.slug}/" class="card card--interactive card--glow tool-card" aria-label="${tool.name}">
      <div class="tool-card__icon">${tool.icon}</div>
      <h3 class="tool-card__name">${tool.name}</h3>
      <p class="tool-card__desc">${tool.description}</p>
      <div class="tool-card__footer">
        <span class="tool-card__category">${tool.category}</span>
        <span class="tool-card__action">Use Tool →</span>
      </div>
    </a>
  `;
}

/**
 * Render a grid of tool cards
 */
export function renderToolGrid(tools, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (tools.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--color-text-muted);">
        <p style="font-size: var(--text-lg);">No tools found</p>
        <p style="font-size: var(--text-sm); margin-top: var(--space-2);">Try a different search or category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = tools.map(renderToolCard).join('');
}
