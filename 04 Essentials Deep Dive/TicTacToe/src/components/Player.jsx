import React, { useState } from "react";

export default function Player({
  playerName,
  playerSymbol,
  isActive,
  onRename,
}) {
  const [name, setName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleInputName(event) {
    setName(event.target.value);
  }

  let nameRendering;
  if (isEditing) {
    nameRendering = (
      <input type="text" onChange={handleInputName} required value={name} />
    );
  } else {
    nameRendering = <span className="playerName">{name}</span>;
  }

  function handleEdit() {
    setIsEditing((editing) => !editing);
    isEditing && onRename(playerSymbol, name);
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {nameRendering}
        <span className="playerSymbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
