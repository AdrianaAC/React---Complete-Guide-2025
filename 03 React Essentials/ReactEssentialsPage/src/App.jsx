import React from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import componentsImg from "./assets/components.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={componentsImg}
              title="Components"
              description="The core UI building block of React apps."
            />
            <CoreConcept image="" title="Test2" description="TestDesc2" />
            <CoreConcept image="" title="Test3" description="TestDesc3" />
            <CoreConcept image="" title="Test4" description="TestDesc4" />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
