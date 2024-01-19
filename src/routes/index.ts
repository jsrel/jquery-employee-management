import { Router } from "./router";
import { addRoute, navigate } from "./routerUtils";
import { HomeView, DashboardView, AuthView } from "./view";

const rootElement = document.getElementById("app") || document.body;
const router = new Router(rootElement);

const homeView = new HomeView();
const dashboardView = new DashboardView();
const authView = new AuthView();

addRoute(router, "/", homeView);
addRoute(router, "/about", dashboardView);
addRoute(router, "/authentications", authView);

document.addEventListener("DOMContentLoaded", () => {
  navigateToCurrentRoute(router);
});

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    if (href) {
      navigate(router, href);
    }
  }
});

window.addEventListener("popstate", () => {
  navigateToCurrentRoute(router);
});

function navigateToCurrentRoute(router: Router) {
  const currentPath = window.location.pathname;
  navigate(router, currentPath);
}
