import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeVal = () => {
    if(count!=0){
      setCount(count - 1);
    }
   
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeVal}>Remove Value</button>
    </>
  );
}

export default App;
