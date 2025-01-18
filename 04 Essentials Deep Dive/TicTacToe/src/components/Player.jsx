import PropTypes from "prop-types";

Player.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerSymbol: PropTypes.string.isRequired,
};

export default function Player({ playerName, playerSymbol }) {
  return (
    <li>
      <span className="player">
        <span className="playerName">{playerName}</span>
        <span className="playerSymbol">{playerSymbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
