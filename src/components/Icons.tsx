import { IconButton } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

// Styled IconButton that will change color when isNavbarHovered is true
const StyledIconButton = styled(IconButton)<{ isNavbarHovered: boolean }>(
  ({ isNavbarHovered }) => ({
    color: isNavbarHovered ? "black" : "inherit", // Change color based on hover
    transition: "color 0.3s ease", // Smooth transition effect for color change
  })
);

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Display the menu icon on smaller screens
  },
}));

interface IconsProps {
  isNavbarHovered: boolean;
}

const Icons = ({ isNavbarHovered }: IconsProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu icon for small screens */}
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <MenuIcon />
      </MobileMenuIcon>

      {/* Favorites icon */}
      <StyledIconButton
        aria-label="favorites"
        isNavbarHovered={isNavbarHovered}
      >
        <FavoriteBorderIcon />
      </StyledIconButton>

      {/* Account icon */}
      <StyledIconButton aria-label="account" isNavbarHovered={isNavbarHovered}>
        <PersonOutlineIcon />
      </StyledIconButton>

      {/* Phone icon */}
      <StyledIconButton aria-label="phone" isNavbarHovered={isNavbarHovered}>
        <PhoneIcon />
      </StyledIconButton>
    </>
  );
};

export default Icons;
