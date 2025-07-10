import { useState, useRef } from "react";

export default function TimerChallenge({ title, time }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();

  function startTimer() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, time * 1000);
  }

  function stopTimer() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's up!</p>}
      <p className="challenge-time">
        {time} second{time > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? stopTimer : startTimer}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running ..." : "Timer inactive"}
      </p>
    </section>
  );
}
