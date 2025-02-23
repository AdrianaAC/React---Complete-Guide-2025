import logo from "../assets/logo.png";
// import "./Header.module.css";
// import { styled } from "styled-components";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img
        src={logo}
        className="mb-8 w-44 h-44 object-contain"
        alt="A canvas"
      />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800">
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
