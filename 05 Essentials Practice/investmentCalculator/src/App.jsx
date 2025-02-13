import Header from "./components/Header";
import Info from "./components/Info";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    expectedReturn: 7,
    duration: 10,
  });

  const inputChangeHandler = (inputField, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputField]: newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <Info />
      <UserInput userInput={userInput} onInputChange={inputChangeHandler} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
