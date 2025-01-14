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

  function renderTabButtons() {
    return Object.keys(EXAMPLES).map((key) => {
      const example =EXAMPLES[key];
        return (
          <TabButton
            key={example.title}
            isSelected={selectedData === example.title}
            clicking={() => handleClick(key)}
          >
            {example.title}
          </TabButton>
        );
    });
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{renderCoreConcepts()}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{renderTabButtons()}</menu>
          <div id="tab-content">{topicRender}</div>
        </section>
      </main>
    </div>
  );
}
export default App;
