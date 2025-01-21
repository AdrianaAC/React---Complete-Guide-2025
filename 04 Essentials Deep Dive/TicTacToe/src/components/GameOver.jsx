export default function GameOver({ winner }) {
  function finalRound(winner) {
    let message;
    winner
      ? (message = <p>Congratulations {winner}, you won this game!</p>)
      : (message = <p>It's a draw!</p>);
    return message;
  }
  return (
    <div className="gameOver">
      <h2>Game Over!</h2>
      {finalRound(winner)}
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
}
