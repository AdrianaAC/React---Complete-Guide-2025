import { useState } from "react";
export default function Player() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  const changeHandler = (event) => {
    setName(event.target.value);
    setSubmit(false);
  };

  const clickHandler = () => {
    setSubmit(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submit ? name : ""}</h2>
      <p>
        <input type="text" value={name} onChange={changeHandler} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
