// SegmentedControl.js
import React, { useState } from "react";
import "../css/SegmentedControl.css"; // Import the CSS file

const SegmentedControl = () => {
  const [active, setActive] = useState("All");

  const handleClick = (value: string) => {
    setActive(value);
  };

  return (
    <div className="segmented-control">
      <button
        className={active === "All" ? "active" : ""}
        onClick={() => handleClick("All")}
      >
        All
      </button>
      <button
        className={active === "About" ? "active" : ""}
        onClick={() => handleClick("About")}
      >
        About
      </button>
      <button
        className={active === "Work" ? "active" : ""}
        onClick={() => handleClick("Work")}
      >
        Work
      </button>
    </div>
  );
};

export default SegmentedControl;
