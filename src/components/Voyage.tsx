import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, IconButton, MenuItem, Select } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";

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

const NavLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: "#007BFF",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const CurrencySelector = styled(Select)(({ theme }) => ({
  marginRight: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Navbar = () => {
  const [currency, setCurrency] = React.useState("USD");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      {/* Left section */}
      <LeftSection>
        <NavLink variant="body1">Destinations</NavLink>
        <NavLink variant="body1">List your home</NavLink>
        <NavLink variant="body1">Offers</NavLink>
        <NavLink variant="body1">Journal</NavLink>
      </LeftSection>

      {/* Mobile menu icon for small screens */}
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <MenuIcon />
      </MobileMenuIcon>

      {/* Middle Section (Logo) */}
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
        onefinestay
      </Typography>

      {/* Right section */}
      <RightSection>
        <CurrencySelector
          value={currency}
          onChange={handleCurrencyChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="USD">$ USD</MenuItem>
          <MenuItem value="EUR">€ EUR</MenuItem>
          <MenuItem value="GBP">£ GBP</MenuItem>
        </CurrencySelector>

        <IconButton aria-label="favorites">
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton aria-label="account">
          <PersonOutlineIcon />
        </IconButton>

        <IconButton aria-label="phone">
          <PhoneIcon />
        </IconButton>

        <Typography
          variant="body1"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Get in touch
        </Typography>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
