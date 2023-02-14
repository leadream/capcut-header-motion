import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import "./App.css";
import ScrollIndicator from "./common/ScrollIndicator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>CapCut Header 动效</h1>
      <h2>缩小屏幕宽度查看菜单在中屏和移动端的效果。</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          缩小屏幕宽度查看菜单在中屏和移动端的效果。
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on
          components in the preview and open the code in the editor!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ScrollIndicator/>
    </div>
  );
}

export default App;
