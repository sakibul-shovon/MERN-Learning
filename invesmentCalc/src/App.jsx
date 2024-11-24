import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvesment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, 
      };
    });
  }
  return (
    <div>
      <h1>React Investment Calculator</h1>
      <Header />

      <UserInput userInput={userInput}  onChange = {handleChange}/>
      <Results input={userInput} />
    </div>
  );
}

export default App;
