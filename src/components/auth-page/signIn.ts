import * as $ from 'jquery';
import { validatePassword, validateUsername } from './validation';

class SignIn extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  private render() {
    this.innerHTML = `
      <form id="signInForm">
        <label for="username">Username:</label>
        <input type="text" id="username" required pattern="[a-zA-Z]+" title="Only letters are allowed">

        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" required 
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
          title="Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long"
        >

        <button type="button" id="loginButton">Login</button>
      </form>
    `;
  }

  private setupEvents() {
    $('#loginButton').on('click', () => this.login());
    $('#showSignUpButton').on('click', () => this.dispatchEvent(new Event('showSignUp')));
  }

  private login() {
    const username = $('#username').val() as string;
    const password = $('#password').val() as string;

    if (!this.validateInput(username, password)) {
      return alert('Invalid input. Please try again');
    }

    // Call a function to handle login logic
    this.dispatchEvent(new CustomEvent('performLogin', { detail: { username, password } }));
  }

  private validateInput(username: string, password: string) {
    return (
      validateUsername(username) &&
      validatePassword(password)
    );
  }
}

customElements.define('sign-in', SignIn);
