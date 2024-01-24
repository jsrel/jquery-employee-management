import "../components/navbar";
import "../components/footer";

export const Layout = (header : string, content: string): string => `
  <header>
    <nav>
      <navigation-bar class="navigation"></navigation-bar>
    </nav>
    ${header}
  </header>
  ${content}
  <footer><footer-bar></footer-bar></footer>
`;
