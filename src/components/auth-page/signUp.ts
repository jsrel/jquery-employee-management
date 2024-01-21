import * as $ from 'jquery';
import { validateUsername, validateEmail, validatePassword } from './validation';

class SignUp extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  private render() {
    this.innerHTML = `
      <form id="signUpForm">
        <label for="username">Username:</label>
        <input type="text" id="username" required pattern="[a-zA-Z]+" title="Only letters are allowed">

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" required 
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
          title="Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long"
        >

        <button type="button" id="signupButton">Sign Up</button>
      </form>
    `;
  }

  private setupEvents() {
    $("#signupButton").on("click", () => this.signUp());
    $("#showSignInButton").on("click", () => this.dispatchEvent(new Event('showSignIn')));
  }

  private signUp() {
    const username = $("#username").val() as string;
    const email = $("#email").val() as string;
    const password = $("#password").val() as string;

    if (!this.validateInput(username, email, password)) {
      return alert("Invalid input. Please try again.");
    }

    // Call a function to handle sign-up logic
    this.dispatchEvent(new CustomEvent('performSignUp', { detail: { username, email, password } }));
  }

  private validateInput(username: string, email: string, password: string) {
    return (
      validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password)
    );
  }
}

customElements.define("sign-up", SignUp);
