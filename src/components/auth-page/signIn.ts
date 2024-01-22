import * as $ from 'jquery';
import { validatePassword, validateUsername } from './validation';

class SignIn extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  private render() {
    this.innerHTML = `
      <form id="signIn" name="signIn">
        <label for="username">Username:</label>
        <input 
          id="username"
          type="text"
          pattern="[a-zA-Z]+"
          title="Only letters are allowed"
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

        <button type="button" id="loginButton">Login</button>
      </form>
    `;
  }

  private setupEvents() {
    $('#loginButton').on('click', () => this.login());
  }

  private login() {
    const username = $('#username').val() as string;
    const password = $('#password').val() as string;

    if (!this.validateInput(username, password)) {
      return alert('Invalid input. Please try again');
    }
  }

  private validateInput(username: string, password: string) {
    return (
      validateUsername(username) &&
      validatePassword(password)
    );
  }
}

customElements.define('sign-in', SignIn);
