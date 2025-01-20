export default function Log({ turns }) {
  let entries = [];
  for (const turn of turns) {
    const { coord, player } = turn;
    const { row, col } = coord;

    const entry = `Player ${player} moved to row ${row}, col ${col}`; //let here does not work
    entries.push(entry);
  }

  return (
    <ol className="log">
      {entries.map((entry, index) => {
        return <li key={index}>{entry}</li>;
      })}
    </ol>
  );
}
