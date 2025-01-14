import React, { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data/dynamicData.js";
import { CORE_CONCEPTS } from "./data/coreConcepts.js";

function App() {
  const [selectedData, setSelectedData] = useState(null);

  // function handleClick(event) {
  //   console.log(event.target.textContent);
  //   dynamic = event.target.textContent;
  //   return dynamic;
  // }

  function handleClick(clickedButton) {
    setSelectedData(clickedButton);
  }

  let topicRender = !selectedData ? (
    <p>Please, select a topic</p>
  ) : (
    <div>
      <h3>{EXAMPLES[selectedData].title}</h3>
      <p>{EXAMPLES[selectedData].description}</p>
      <pre>
        <code>{EXAMPLES[selectedData].code}</code>
      </pre>
    </div>
  );

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
            <TabButton
              isSelected={selectedData === "Components"}
              clicking={() => handleClick("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedData === "JSX"}
              clicking={() => handleClick("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedData === "Props"}
              clicking={() => handleClick("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedData === "State"}
              clicking={() => handleClick("State")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">{topicRender}</div>
        </section>
      </main>
    </div>
  );
}
export default App;
