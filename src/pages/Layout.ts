import "../components/navbar";
import "../components/footer";

export const Layout = (content: string): string => `
  <navigation-bar></navigation-bar>
  ${content}
  <footer-bar></footer-bar>
`;
