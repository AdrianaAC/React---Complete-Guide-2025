export default function TabButton(props) {
  function handleClick() {
    console.log(props.children);
  }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
