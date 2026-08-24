// ============================================
// GEETA TECH HUB — Header Component
// ============================================

export function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  // Determine current page for active nav highlighting
  const path = window.location.pathname;

  const getActive = (href) => {
    if (href === '/' && (path === '/' || path === '/index.html')) return 'active';
    if (href !== '/' && path.startsWith(href)) return 'active';
    return '';
  };

  header.innerHTML = `
    <div class="header__inner">
      <a href="/" class="header__logo" aria-label="Geeta Tech Hub Home">
        <div class="header__logo-icon">G</div>
        <span>Geeta Tech Hub</span>
      </a>

      <nav class="header__nav" aria-label="Main navigation">
        <a href="/tools/" class="${getActive('/tools/')}">Tools</a>
        <a href="/tools/#categories" class="">Categories</a>
        <a href="/services/" class="${getActive('/services/')}">Services</a>
        <a href="/blog/" class="${getActive('/blog/')}">Resources</a>
        <a href="/about/" class="${getActive('/about/')}">About</a>
      </nav>

      <div class="header__actions">
        <a href="/contact/" class="btn btn--accent btn--sm">Hire Me</a>
        <button class="header__menu-btn" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" class="menu-line-1"/>
            <line x1="3" y1="12" x2="21" y2="12" class="menu-line-2"/>
            <line x1="3" y1="18" x2="21" y2="18" class="menu-line-3"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
      <a href="/tools/" class="${getActive('/tools/')}">🛠️ Tools</a>
      <a href="/tools/#categories">📂 Categories</a>
      <a href="/services/" class="${getActive('/services/')}">💼 Services</a>
      <a href="/blog/" class="${getActive('/blog/')}">📚 Resources</a>
      <a href="/about/" class="${getActive('/about/')}">👤 About</a>
      <a href="/contact/" class="btn btn--accent btn--lg">Hire Me</a>
    </div>
  `;

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  menuBtn?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
