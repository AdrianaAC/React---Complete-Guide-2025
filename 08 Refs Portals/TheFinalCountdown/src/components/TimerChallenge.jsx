import { useState } from "react";

export default function TimerChallenge({ title, time }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function startTimer() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, time * 1000);
  }

  function stopTimer() {
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's up!</p>}
      <p className="challenge-time">
        {time} second{time > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={startTimer}>
          {timerStarted ? "Start" : "Stop"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running ..." : "Timer inactive"}
      </p>
    </section>
  );
}
