import { CORE_CONCEPTS } from "../data/coreConcepts.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  function renderCoreConcepts() {
    return CORE_CONCEPTS.map((concept) => (
      <CoreConcept
        key={concept.title}
        image={concept.image}
        title={concept.title}
        description={concept.description}
      />
    ));
  }

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{renderCoreConcepts()}</ul>
    </section>
  );
}
