// App.js
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";
import { useState } from "react";

function App() {
  const [menuValue, setMenuValue] = useState("All");
  const onMenuChange = (value: string) => {
    setMenuValue(value);
  };
  return (
    <div className="App">
      <SegmentedControl onMenuChange={onMenuChange} />
      <div style={{ padding: "50px" }}>
        <DraggableCard currentMenu={menuValue} />
      </div>
    </div>
  );
}

export default App;
