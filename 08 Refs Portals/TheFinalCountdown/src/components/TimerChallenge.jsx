export default function TimerChallenge({ title, time }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {time} second{time > 1 ? "s" : ""}
      </p>
      <p>
        <button>Challenge</button>
      </p>
      <p className="">Time is running</p>
    </section>
  );
}
