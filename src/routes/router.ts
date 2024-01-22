import { ErrorPage } from "./views";

type Route = {
  path: string;
  view: HTMLElement;
};

export class Router {
  private routes: Route[] = [];

  addRoute(path: string, view: HTMLElement): void {
    this.routes.push({ path, view });
  }

  navigate(path: string): void {
    const route = this.routes.find((r) => r.path === path);

    if (route) {
      const newView = route.view.cloneNode(true) as HTMLElement;

      document.body.innerHTML = "";
      document.body.appendChild(newView);

      history.pushState(null, "", path);
    } else {
      this.clientError();
      console.error(`Route not found: ${path}`);
    }
  }

  private clientError(): void {
    const errorPage = new ErrorPage();

    document.body.innerHTML = "";
    document.body.appendChild(errorPage);
  }
}
