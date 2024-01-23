import * as $ from 'jquery';
import { validatePassword, validateUsername } from './validation';

class SignIn extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  private render() {
    this.innerHTML = `
      <form class="form" id="signIn" action="">
        <div class="input-field">
          <input
            required
            autocomplete="on"
            type="text"
            id="username"
            title="Only letters are allowed"
          />
          <label for="username">Username</label>
        </div>
        <div class="input-field">
          <input
            required
            autocomplete="off"
            type="password"
            id="password"
          />
          <label for="password">Password</label>
        </div>

        <div class="btn-container">
          <button class="btn" id="btn__login-btn">Submit</button>
          <div class="acc-text">
            New here ?
            <span style="color : #0000ff; cursor : pointer;">Create Account</span>
          </div>
        </div>
      </form>
    `;
  }

  private setupEvents() {
    $('btn__login-btn').on('click', () => this.login());
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
