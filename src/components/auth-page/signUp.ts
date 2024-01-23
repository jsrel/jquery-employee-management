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
      <form class="form" action="">
        <div class="input-field">
          <input
            id="username"
            type="text"
            pattern="[a-zA-Z]+"
            title="Only letters are allowed"
            autocomplete="on"
            required
          />
          <label for="username">Username</label>
        </div>
        <div class="input-field">
          <input
            id="email"
            type="email"
            name="email"
            autocomplete="on"
            required
          />
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <input
            id="password"
            type="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
            title="Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long"
            required
          />
          <label for="username">Password</label>
        </div>

        <div class="btn-container">
          <button type="button" class="btn btn__submit" >Submit</button>
        </div>
      </form>
    `;
  }

  private setupEvents() {
    $("btn__submit").on("click", () => this.signUp());
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
