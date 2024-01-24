import "../ui/companyLogo";
import "./navList";
import "../ui/hamburgerMenu";
import * as $ from "jquery";

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  render() {
    this.innerHTML = `
      <company-logo></company-logo>
      <nav-list class="navigation--list"></nav-list>
      <hamburger-menu class="menu"></hamburger-menu>
    `;
  }

  setupEvents() {
    $(".menu").on("click", (event) => {
      event.preventDefault();
      $("nav-list").toggleClass("active");
      $(".burger").toggleClass("active");
    });
  }
}

customElements.define("navigation-bar", NavBar);
