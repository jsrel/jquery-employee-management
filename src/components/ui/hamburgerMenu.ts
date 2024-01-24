class HamburgerMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <label class="burger" for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
    `;
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
