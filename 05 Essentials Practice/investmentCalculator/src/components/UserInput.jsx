import { useState } from "react";

export default function UserInput() {
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
    <section className="userInput">
      <div className="inputGroup">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) =>
              inputChangeHandler(event.target.id, event.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
