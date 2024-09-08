import { IconButton } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Display the menu icon on smaller screens
  },
}));

const Icons = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  {
    /* Mobile menu icon for small screens */
  }
  <MobileMenuIcon onClick={toggleMobileMenu}>
    <MenuIcon />
  </MobileMenuIcon>;
  return (
    <>
      <IconButton aria-label="favorites">
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton aria-label="account">
        <PersonOutlineIcon />
      </IconButton>

      <IconButton aria-label="phone">
        <PhoneIcon />
      </IconButton>
    </>
  );
};

export default Icons;
