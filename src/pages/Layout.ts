import "../components/navbar";
import "../components/footer";

export const Layout = (content: string): string => `
  <nav><navigation-bar class="navigation"></navigation-bar></nav>
  ${content}
  <footer><footer-bar></footer-bar></footer>
`;
