import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const [menuValue, setMenuValue] = useState("All");
  const onMenuChange = (value: string) => {
    setMenuValue(value);
  };
  const location = useLocation();

  const handleRoute = () => {
    if (location.pathname === "/link1") {
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
    if (location.pathname === "/") {
      return (
        <>
          <Link to="/link1" className="link-button">
            Go to Link 1
          </Link>
          <Link to="/link2" className="link-button">
            Go to Link 2
          </Link>
        </>
      );
    }
    return <div style={{ backgroundColor: "#1a1a1a !important" }}></div>;
  };

  return (
    <div className={location.pathname === "/link1" ? "first-link" : "App"}>
      <div
        className="background-video"
        style={
          location.pathname !== "/link1"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <video autoPlay loop muted id="video-background">
          <source src="/ocean.mp4" type="video/mp4" />
        </video>
      </div>
      <div style={parentLinkStyle}>
        <div style={childLinkStyle}>{redirectUI()}</div>
      </div>
      {handleRoute()}
    </div>
  );
}

export default App;
