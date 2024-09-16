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

const VerticalSeparator = styled("div")<{ isNavbarHovered: boolean }>(
  ({ isNavbarHovered }) => ({
    width: "1px",
    height: "24px", // You can adjust the height as needed
    backgroundColor: isNavbarHovered ? "black" : "white", // Uses the theme's divider color
    margin: "0 10px", // Adjust space around the separator
  })
);

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

      <VerticalSeparator isNavbarHovered={isNavbarHovered} />

      {/* Favorites icon */}
      <StyledIconButton
        aria-label="favorites"
        isNavbarHovered={isNavbarHovered}
      >
        <FavoriteBorderIcon />
      </StyledIconButton>
      <VerticalSeparator isNavbarHovered={isNavbarHovered} />

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
