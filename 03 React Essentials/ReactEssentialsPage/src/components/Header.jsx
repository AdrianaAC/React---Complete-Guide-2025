import React from "react";

export default function Header() {
  const reactDesc = ["Fundamental", "Crucial", "Core", "Essential"];

  function genRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let randomDesc = reactDesc[genRandomIndex(reactDesc)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
