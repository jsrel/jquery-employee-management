import * as $ from "jquery";
import "./signUp";
import "./signIn";

class UserAuthPage extends HTMLElement {
  private currentView!: string;

  connectedCallback() {
    this.currentView = "signUp";
    this.render();
  }

  private render() {
    this.innerHTML = `
      <div class="user-auth__menu">
        <button id="showSignUp">Sign Up</button>
        <button id="showSignIn">Sign In</button>
      </div>
      ${
        this.currentView === "signUp"
          ? "<sign-up></sign-up>"
          : "<sign-in></sign-in>"
      }
    `;

    $("#showSignUp").on("click", () => this.handleClick("signUp"));
    $("#showSignIn").on("click", () => this.handleClick("signIn"));
  }

  private handleClick(view: string) {
    this.currentView = view;
    this.render();
  }
}

customElements.define("user-auth-page", UserAuthPage);
