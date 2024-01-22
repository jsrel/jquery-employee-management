import * as $ from "jquery";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "./validation";

class SignUp extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  private render() {
    this.innerHTML = `
      <form id="signUp" name="signUp">
        <label for="username">Username:</label>
        <input
          id="username"
          type="text"
          pattern="[a-zA-Z]+"
          title="Only letters are allowed"
          autocomplete="on"
          required 
        >

        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          autocomplete="on"
          required
        >

        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
          title="Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long"
          required
        >

        <button type="button" id="signupButton">Sign Up</button>
      </form>
    `;
  }

  private setupEvents() {
    $("#signupButton").on("click", () => this.signUp());
  }

  private signUp() {
    const username = $("#username").val() as string;
    const email = $("#email").val() as string;
    const password = $("#password").val() as string;

    if (!this.validateInput(username, email, password)) {
      return alert("Invalid input. Please try again.");
    }
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
