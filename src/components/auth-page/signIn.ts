class SignIn extends HTMLElement{
  connectedCallback() {
    this.innerHTML = '<div>Hello This Was Sign In<div>'
  }
}

customElements.define('sign-in', SignIn);