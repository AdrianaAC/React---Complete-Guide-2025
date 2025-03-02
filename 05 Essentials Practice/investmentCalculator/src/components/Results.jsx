import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  let results = calculateInvestmentResults(userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
 
  console.log(results);
  return (
    <section className="results">
      <table className="resultsTable">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Interest (Total)</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            console.log(result);
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const totalInvestedCapital = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
