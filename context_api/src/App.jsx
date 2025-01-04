import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import ChildC from "./components/ChildC";

// Step 1: Create context
const UserContext = createContext(); // Move it outside the App function for global scope

const ThemeContext = createContext();
function App() {
  // Step 2: Create a state to manage the user
  // const [user, setUser] = useState({ name: "John" });

  // Step 3: Wrap all children inside the provider

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="container" style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
        <ChildA />
      </div>
    </ThemeContext.Provider>

    // <div>
    //   <UserContext.Provider value={user}>
    //     <ChildA />

    //   </UserContext.Provider>
    // </div>
  );
}

// Export UserContext and App
export default App;
export { UserContext };
export { ThemeContext };
