class FooterBar extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <p>&copy; ${currentYear} Your Website Name. All rights reserved.</p>
        <!-- Tambahkan elemen-elemen SEO friendly sesuai kebutuhan -->
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
