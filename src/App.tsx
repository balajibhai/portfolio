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

  const parentLinkStyle = {
    display: "flex",
    width: "500px",
  };

  const childLinkStyle = {
    display: "flex",
    gap: "20px", // Add space between the links
  };

  const redirectUI = () => {
    if (!linkValue) {
      return (
        <>
          <Link
            to="/link1"
            className="link-button"
            onClick={() => handleLinkClick("link1")}
          >
            Go to Link 1
          </Link>
          <Link
            to="/link2"
            className="link-button"
            onClick={() => handleLinkClick("link2")}
          >
            Go to Link 2
          </Link>
        </>
      );
    }
    return <div style={{ backgroundColor: "#1a1a1a !important" }}></div>;
  };

  return (
    <div className={linkValue === "link1" ? "first-link" : "App"}>
      {
        <div style={parentLinkStyle}>
          <div style={childLinkStyle}>{redirectUI()}</div>
        </div>
      }
      {handleRoute()}
    </div>
  );
}

export default App;
