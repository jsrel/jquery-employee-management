import { Auth } from "../pages/auth";
import { Home } from "../pages/home";
import { Docs } from "../pages/docs";
import { Dashboard } from "../pages/dashboard";

export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Home;
  }
}

export class AuthPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Auth;
  }
}

export class DocsPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Docs;
  }
}

export class DashboardPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Dashboard;
  }
}

export class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      "<h1>404 Not Found</h1><p>Sorry, the page you requested does not exist.</p>";
  }
}

customElements.define("home-page", HomePage);
customElements.define("authentications-page", AuthPage);
customElements.define("documentations-page", DocsPage)
customElements.define("dasboard-page", DashboardPage);
customElements.define("error-page", ErrorPage);
