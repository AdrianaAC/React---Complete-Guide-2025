import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img alt="logo" src={logo} />
      <h1>Investment Calculator</h1>
    </header>
  );
}
