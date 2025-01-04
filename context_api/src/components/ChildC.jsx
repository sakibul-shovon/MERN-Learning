import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ChildC() {
  // Use ThemeContext to access both theme and setTheme
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    // Toggle theme between 'light' and 'dark'
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      {/* <h1>ChildC Component</h1> */}
      
      <button onClick={handleClick}>Change Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
    
  );
}

export default ChildC;
