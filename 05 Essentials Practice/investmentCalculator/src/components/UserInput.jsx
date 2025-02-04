export default function UserInput() {
  return (
    <div className="inputGroup">
      <p>
        <label>Initial Investment</label>
        <input type="number" required />
      </p>
      <p>
        <label>Annual Investment</label>
        <input type="number" required />
      </p>
      <p>
        <label>Expected Return</label>
        <input type="number" required />
      </p>
      <p>
        <label>Duration</label>
        <input type="number" required />
      </p>
    </div>
  );
}
