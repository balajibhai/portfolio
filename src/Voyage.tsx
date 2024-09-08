import React from "react";
import { styled } from "@mui/system";
import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Text from "./components/Text";
import Dropdown from "./components/Dropdown";

const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none", // hide the left section on smaller screens
  },
}));

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Display the menu icon on smaller screens
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      {/* Left section */}
      <LeftSection>
        <Text variant="body1" content="Destinations" />
        <Text variant="body1" content="List your home" />
        <Text variant="body1" content="Offers" />
        <Text variant="body1" content="Journal" />
      </LeftSection>

      {/* Mobile menu icon for small screens */}
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <MenuIcon />
      </MobileMenuIcon>

      {/* Middle Section (Logo) */}
      <Text
        variant="h6"
        sx={{ flexGrow: 1, textAlign: "center" }}
        content="onefinestay"
        component="Typography"
      />

      {/* Right section */}
      <RightSection>
        <Dropdown />

        <IconButton aria-label="favorites">
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton aria-label="account">
          <PersonOutlineIcon />
        </IconButton>

        <IconButton aria-label="phone">
          <PhoneIcon />
        </IconButton>

        <Text
          variant="body1"
          sx={{ display: { xs: "none", sm: "block" } }}
          content="Get in touch"
          component="Typography"
        />
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
