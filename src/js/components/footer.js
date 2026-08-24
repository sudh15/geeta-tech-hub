// ============================================
// GEETA TECH HUB — Footer Component
// ============================================

export function initFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-name">
            <div class="header__logo-icon" style="width:28px;height:28px;font-size:0.75rem;">G</div>
            Geeta Tech Hub
          </div>
          <p class="footer__brand-desc">
            Free online tools and practical web services for creators, developers, bloggers and businesses.
          </p>
        </div>

        <div>
          <h4 class="footer__col-title">Tools</h4>
          <ul class="footer__links">
            <li><a href="/tools/">All Tools</a></li>
            <li><a href="/tools/#image">Image Tools</a></li>
            <li><a href="/tools/#seo">SEO Tools</a></li>
            <li><a href="/tools/#text">Text Tools</a></li>
            <li><a href="/tools/#developer">Developer Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer__col-title">Services</h4>
          <ul class="footer__links">
            <li><a href="/services/">Web Design</a></li>
            <li><a href="/services/">Blog Design</a></li>
            <li><a href="/services/">Theme Design</a></li>
            <li><a href="/services/">Website Redesign</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer__col-title">Resources</h4>
          <ul class="footer__links">
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer__col-title">Legal</h4>
          <ul class="footer__links">
            <li><a href="/privacy/">Privacy Policy</a></li>
            <li><a href="/terms/">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>&copy; ${new Date().getFullYear()} Geeta Tech Hub. All rights reserved.</span>
        <span>Made with ♥ for the web</span>
      </div>
    </div>
  `;
}
