import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Going easy?" time={1} />
        <TimerChallenge title="Try a little harder" time={5} />
        <TimerChallenge title="Are you insane?" time={17} />
        <TimerChallenge title="Good luck on this one!!" time={29} />
      </div>
    </>
  );
}

export default App;
