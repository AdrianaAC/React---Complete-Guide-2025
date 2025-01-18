import Player from "./components/Player";

function App() {
  return (
    <main>
      <div className="gameDashboard">
        <ol className="playersDashboard">
          <Player playerName="Player 1" playerSymbol="X" />
          <Player playerName="Player2" playerSymbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
