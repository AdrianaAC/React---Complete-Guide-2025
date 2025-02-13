export default function Results({userInput}) {


  return (
    <section className="results">
      <h2>Results</h2>
      <p>
        You will invest <strong>${userInput.initialInvestment}</strong> initially and{" "}
        After {userInput.duration} years, your investment will be worth{" "}
        <strong>${userInput.expectedReturn}</strong>.
      </p>
    </section>
  );
}
