import { CORE_CONCEPTS } from "../data/coreConcepts.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

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
    <Section id="core-concepts" title="Core Concepts">
      <ul>{renderCoreConcepts()}</ul>
    </Section>
  );
}
