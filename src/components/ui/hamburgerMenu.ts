class HamburgerMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="burger" for="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
