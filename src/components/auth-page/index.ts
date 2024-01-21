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
      <div>
        <button id="showSignUp">Sign Up</button>
        <button id="showSignIn">Sign In</button>
      </div>
      <sign-up></sign-up>
      <sign-in></sign-in>
    `;

    const showSignUpButton = this.querySelector(
      "#showSignUp"
    ) as HTMLButtonElement;
    const showSignInButton = this.querySelector(
      "#showSignIn"
    ) as HTMLButtonElement;

    showSignUpButton.addEventListener("click", () => this.showView("signUp"));
    showSignInButton.addEventListener("click", () => this.showView("signIn"));

    this.updateView();
  }

  private showView(view: string) {
    this.currentView = view;
    this.updateView();
  }

  private updateView() {
    const signUpComponent = this.querySelector("sign-up") as HTMLElement;
    const signInComponent = this.querySelector("sign-in") as HTMLElement;

    signUpComponent.style.display =
      this.currentView === "signUp" ? "block" : "none";
    signInComponent.style.display =
      this.currentView === "signIn" ? "block" : "none";
  }
}

customElements.define("user-auth-page", UserAuthPage);
