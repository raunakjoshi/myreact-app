import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const names = ["Alice", "Bob", "Charlie", "David"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="header">
        <h2>Welcome!</h2>
      </div>

      <h2>List of Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <div>
        <img
          src="https://media.timeout.com/images/105124818/image.jpg"
          alt="no image"
        />
      </div>
      <div class="footer">
        <p>All rights reserved</p>
      </div>
    </>
  );
}
export default App;
