import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const NavbarContainerStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#fff", // Change background color on hover
    color: "#333", // Change text color on hover
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

interface NavbarContainerProps {
  children: React.ReactNode;
  onHoverChange: (hovered: boolean) => void; // Add a callback prop
}

const NavbarContainer = ({ children, onHoverChange }: NavbarContainerProps) => {
  const [ishovered, setIshovered] = useState(false);

  const handleMouseEnter = () => {
    setIshovered(true);
    onHoverChange(true); // Notify the parent about the hover state
  };

  const handleMouseLeave = () => {
    setIshovered(false);
    onHoverChange(false); // Notify the parent when the hover ends
  };

  return (
    <NavbarContainerStyle
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </NavbarContainerStyle>
  );
};

export default NavbarContainer;
