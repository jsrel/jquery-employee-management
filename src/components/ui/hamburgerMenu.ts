class HamburgerMenu extends  HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div>HamburgerMenu<div>'
  } 
}

customElements.define('hamburger-menu', HamburgerMenu)