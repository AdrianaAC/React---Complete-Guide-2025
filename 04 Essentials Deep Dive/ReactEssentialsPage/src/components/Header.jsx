import React from "react";
import atomImg from "../assets/react-core-concepts.png";

export default function Header() {
  const reactDesc = ["Fundamental", "Crucial", "Core", "Essential"];

  function genRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  return (
    <header>
      <img src={atomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDesc[genRandomIndex(reactDesc)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
