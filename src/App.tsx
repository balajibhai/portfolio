// App.js
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [menuValue, setMenuValue] = useState("All");
  const onMenuChange = (value: string) => {
    setMenuValue(value);
  };
  const [linkValue, setLinkValue] = useState("");

  const handleLinkClick = (value: string) => {
    setLinkValue(value);
  };

  const handleRoute = () => {
    if (linkValue === "link1") {
      return (
        <div>
          <SegmentedControl onMenuChange={onMenuChange} />
          <div style={{ padding: "50px" }}>
            <DraggableCard currentMenu={menuValue} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Link
        to="/link1"
        className="link-button"
        onClick={() => handleLinkClick("link1")}
      >
        Go to Target Page
      </Link>
      <Link
        to="/link2"
        className="link-button"
        onClick={() => handleLinkClick("link2")}
      >
        Go to Target Page
      </Link>
      {handleRoute()}
    </div>
  );
}

export default App;
