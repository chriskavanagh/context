import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Context</h1>
      <h2 style={{ color: "gold" }}>Best Practices</h2>
    </>
  );
}

export default App;
