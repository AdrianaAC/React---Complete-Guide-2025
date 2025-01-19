import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div className="gameDashboard">
        <ol className="playersDashboard">
          <Player playerName="Player 1" playerSymbol="X" />
          <Player playerName="Player2" playerSymbol="O" />
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  );
}

export default App;
