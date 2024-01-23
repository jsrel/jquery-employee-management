import './navLogo'
import './navList'
import '../ui/hamburgerMenu'

class NavBar extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <nav-logo></nav-logo>
      <nav-list></nav-list>
      <hamburger-menu></hamburger-menu>
    `
  };
}

customElements.define('navigation-bar', NavBar);