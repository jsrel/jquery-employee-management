import { Router } from "./router";

export function addRoute(router: Router, path: string, view: HTMLElement): void {
  router.addRoute(path, view);
}

export function navigate(router: Router, path: string): void {
  router.navigate(path);
}
