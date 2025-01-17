import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data/dynamicData.js";
import { useState } from "react";

export default function Examples() {
  const [selectedData, setSelectedData] = useState(null);

  function renderTabButtons() {
    return Object.keys(EXAMPLES).map((key) => {
      const example = EXAMPLES[key];
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

  function handleClick(clickedButton) {
    setSelectedData(clickedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>{renderTabButtons()}</menu>
      <div id="tab-content">{topicRender}</div>
    </section>
  );
}
