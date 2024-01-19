import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Auth } from "../pages/auth";

export class HomeView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Home;
  }
}

export class DashboardView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Dashboard;
  }
}

export class AuthView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Auth;
  }
}

export class ErrorView extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      "<h1>404 Not Found</h1><p>Sorry, the page you requested does not exist.</p>";
  }
}

customElements.define("home-view", HomeView);
customElements.define("about-view", DashboardView);
customElements.define("auth-view", AuthView);
customElements.define("error-view", ErrorView);
