import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>

            <ul>
              {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key={conceptItem.title}{...conceptItem} />
              ))}
              {/* <CoreConcept {...CORE_CONCEPTS[0]} /> {/* Fixed index */}
              {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
              {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
              {/* <CoreConcept {...CORE_CONCEPTS[3]} />  */}
            </ul>
          </section>

          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {!selectedTopic && <p>Please select a topic</p>}
              <div style={{ display: "flex", gap: "10px" }}>
                <TabButton
                  isSelect={selectedTopic === "components"}
                  label="Components"
                  onSelect={() => handleClick("components")}
                />
                <TabButton
                  isSelect={selectedTopic === "jsx"}
                  label="JSX"
                  onSelect={() => handleClick("jsx")}
                />
                <TabButton
                  isSelect={selectedTopic === "props"}
                  label="Props"
                  onSelect={() => handleClick("props")}
                />
                <TabButton
                  isSelect={selectedTopic === "state"}
                  label="State"
                  onSelect={() => handleClick("state")}
                />
              </div>
            </menu>
            <div id="tab-content">
              {selectedTopic && (
                <>
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
                </>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
