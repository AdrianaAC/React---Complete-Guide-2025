function App() {
  return (
 <main>
  <div className="gameDashboard">
    <ol className="playersDashboard">
      <li>
        <span className="player">
        <span className="playerName">Player 1</span>
        <span className="playerSymbol">X</span>
        </span>
        <button>Edit</button>
      </li>
      <li>
        <span className="player">
      <span className="playerName">Player 2</span>
      <span className="playerSymbol">O</span>
      </span>
      <button>Edit</button>
      </li>
    </ol>
    GAME BOARD
  </div>
  LOG
  </main>
  );
}

export default App;
