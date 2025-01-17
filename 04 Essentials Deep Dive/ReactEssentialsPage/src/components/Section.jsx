export default function Section(props) {
  const { children, id, title } = props;

  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
