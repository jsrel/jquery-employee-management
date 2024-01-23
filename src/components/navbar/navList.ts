class NavList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    this.innerHTML = `
      <div>NavList</div>
    `;
  }
}

customElements.define("nav-list", NavList);
