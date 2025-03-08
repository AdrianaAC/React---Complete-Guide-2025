import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");
  const clickHandler = () => {
    setName(playerName.current.value);
    setSubmit(true);
  };
  return (
    <section id="player">
      <h2>Welcome {name ?? ""}</h2>
      <p>
        <input ref={playerName} type="text" placeholder="Enter your name" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
