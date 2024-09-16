import React, { useState } from "react";
import { styled } from "@mui/system";

interface SegmentedControlProps {
  onMenuChange: (value: string) => void;
}

const SegmentedControl = ({ onMenuChange }: SegmentedControlProps) => {
  const [active, setActive] = useState("All");

  const handleClick = (value: string) => {
    setActive(value);
    onMenuChange(value);
  };

  return (
    <SegmentedControlContainer>
      <SegmentedControlButton
        className={active === "All" ? "active" : ""}
        onClick={() => handleClick("All")}
      >
        All
      </SegmentedControlButton>
      <SegmentedControlButton
        className={active === "About" ? "active" : ""}
        onClick={() => handleClick("About")}
      >
        About
      </SegmentedControlButton>
      <SegmentedControlButton
        className={active === "Work" ? "active" : ""}
        onClick={() => handleClick("Work")}
      >
        Work
      </SegmentedControlButton>
    </SegmentedControlContainer>
  );
};

export default SegmentedControl;

// Styled components using MUI's styled
const SegmentedControlContainer = styled("div")({
  display: "flex",
  backgroundColor: "#2a2a2a",
  borderRadius: "25px", // Rounded edges
  overflow: "hidden", // Ensures content does not overflow rounded corners
  padding: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
  margin: "50px auto",
  width: "max-content",
});

const SegmentedControlButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  color: "#ffffff",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  outline: "none",
  transition: "background-color 0.3s",
  borderRadius: "20px", // Rounded edges for buttons
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&.active": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Depth for active button
  },
}));
