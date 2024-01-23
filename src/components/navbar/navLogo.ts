class NavLogo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>Logo</div>
    `;
  }
}

customElements.define("nav-logo", NavLogo);
