export default function UserInput({ userInput, onInputChange }) {
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
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
              onInputChange(event.target.id, event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
