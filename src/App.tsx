// App.js
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";

function App() {
  return (
    <div className="App">
      <SegmentedControl />
      <div style={{ padding: "50px" }}>
        <DraggableCard />
      </div>
    </div>
  );
}

export default App;
