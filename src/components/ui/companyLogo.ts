class CompanyLogo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>Logo</div>
    `
  }
}

customElements.define('company-logo', CompanyLogo)