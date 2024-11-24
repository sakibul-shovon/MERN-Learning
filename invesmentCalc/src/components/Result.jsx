import { calculateInvestmentResults, formatter } from "./../util/investment";

export default function Results({ input }) {
  // Validate the input structure
  const result = calculateInvestmentResults({
    initialInvestment: input.initialInvestment || 0,
    annualInvestment: input.annualInvestment || 0,
    expectedReturn: input.expectedReturn || 0,
    duration: input.duration || 0,
  });

  if (result.length === 0) {
    return <p>No data available.</p>;
  }

  const initialInvestment =
    result[0].valueEndOfYear -
    result[0].interest -
    result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData, index) => {
          const totalInterest =
            yearData.valueEndOfYear -
            (yearData.annualInvestment * yearData.year + initialInvestment);

          const totalAmountInvested =
            initialInvestment + yearData.annualInvestment * yearData.year;

          return (
            <tr key={index}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
