import React from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/coreConcepts.js";

function App() {
  function handleClick(event) {
    console.log(event.target.textContent);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton clicking={handleClick}>Components</TabButton>
            <TabButton clicking={handleClick}>JSX</TabButton>
            <TabButton clicking={handleClick}>Props</TabButton>
            <TabButton clicking={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}
export default App;
