import { Router } from "./router";
import { addRoute, navigate } from "./routerUtils";
import { HomePage, AuthPage, DocsPage, DashboardPage } from "./views";

const rootElement = document.getElementById("app") || document.body;
const router = new Router(rootElement);

const homePage = new HomePage();
const authPage = new AuthPage();
const docsPage = new DocsPage();
const dashboardPage = new DashboardPage();

addRoute(router, "/", homePage);
addRoute(router, "/authentications", authPage);
addRoute(router, "/documentations", docsPage);
addRoute(router, "/dashboard", dashboardPage);

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
