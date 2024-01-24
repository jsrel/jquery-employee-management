class NavList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    this.innerHTML = `
      <ul class="nav-list--route">
        <li>
          <button>
            <a href="/">Home</a>
          </button>
        </li>
        <li>
          <button>
            <a href="/documentations">Docs</a>
          </button>
        </li>
        <li>
          <button>
            <a href="/authentications">Sign In</a>
          </button>
        </li>
        <li>
          <button>
            <a href="/dashboard">Dashboard</a>
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define("nav-list", NavList);
