class NavList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    this.innerHTML = `
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/documentations">Docs</a>
      <a href="/authentications">Sign In</a>
    `;
  }
}

customElements.define("nav-list", NavList);
