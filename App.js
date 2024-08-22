import { useState } from "react";
import ButtonList from "./ButtonList.tsx";
import DATA from "./data/index.js";

function App() {
  const [selectedBtn, setSelectedBtn] = useState(DATA.map((x) => x.text));

  return (
    <div className="container">
      <ButtonList
        selectedBtn={selectedBtn}
        data={DATA}
        setSelectedBtn={setSelectedBtn}
      />
    </div>
  );
}

export default App;
