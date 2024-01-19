import { ErrorView } from "./view";

type Route = {
  path: string;
  view: HTMLElement;
};

export class Router {
  private routes: Route[] = [];
  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  addRoute(path: string, view: HTMLElement): void {
    this.routes.push({ path, view });
  }

  navigate(path: string): void {
    const route = this.routes.find((r) => r.path === path);

    if (route) {
      const newView = route.view.cloneNode(true) as HTMLElement;
      const routerOutlet = this.rootElement.querySelector("#router-outlet");

      if (routerOutlet) {
        routerOutlet.innerHTML = "";
        routerOutlet.appendChild(newView);
      }
      
      history.pushState(null, "", path);
    } else {
      this.clientError();
      console.error(`Route not found: ${path}`);
    }
  }

  private clientError(): void {
    const errorView = new ErrorView();
    
    document.body.innerHTML = "";
    document.body.appendChild(errorView);
  }
}
