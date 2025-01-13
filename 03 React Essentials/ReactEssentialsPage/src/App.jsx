import React from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/coreConcepts.js";

function App() {
  let dynamic = "Dynamic Text";
  // function handleClick(event) {
  //   console.log(event.target.textContent);
  //   dynamic = event.target.textContent;
  //   return dynamic;
  // }

  function handleClick(clickedButton) {
    console.log(clickedButton);
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
            <TabButton clicking={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton clicking={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton clicking={() => handleClick("Propss")}>Props</TabButton>
            <TabButton clicking={() => handleClick("State")}>State</TabButton>
          </menu>
          {dynamic}
        </section>
      </main>
    </div>
  );
}
export default App;
