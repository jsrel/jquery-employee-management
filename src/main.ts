import "./style.css";
import './routes'
import './components/navbar'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>hello world</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <div id="router-outlet"></div>
  </div>
`;
