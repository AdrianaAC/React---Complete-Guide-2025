export default function TabButton(props) {
  const { children, clicking, isSelected } = props;

  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={clicking}>
        {children}
      </button>
    </li>
  );
}
