class NavBar extends HTMLElement {
  connectedCallback(){
    this.innerHTML = '<div>Hello World</div>'
  };
}

customElements.define('navigation-bar', NavBar);