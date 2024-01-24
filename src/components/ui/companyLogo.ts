class CompanyLogo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    this.innerHTML = `
      <div>Logo</div>
    `
  }
}

customElements.define('company-logo', CompanyLogo)