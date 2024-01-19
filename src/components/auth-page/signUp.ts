class SignUp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div>Hello This was Sign Up<div>'
  }
}

customElements.define('sign-up', SignUp);