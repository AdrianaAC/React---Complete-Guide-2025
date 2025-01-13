export default function TabButton(props) {
    const {children, clicking} = props;

  return (
    <li>
      <button onClick={clicking}>{children}</button>
    </li>
  );
}
