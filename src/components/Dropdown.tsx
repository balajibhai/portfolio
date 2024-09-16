import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CurrencySelector = styled(Select)<{ isNavbarHovered: boolean }>(
  ({ theme, isNavbarHovered }) => ({
    marginRight: "10px",
    color: isNavbarHovered ? "black" : "inherit", // Change color based on hover
    transition: "color 0.3s ease", // Smooth transition effect for color
    "& .MuiSelect-icon": {
      color: isNavbarHovered ? "black" : "inherit", // Change dropdown arrow color
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: isNavbarHovered ? "black" : "inherit", // Change border color based on hover
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  })
);

interface DropdownProps {
  isNavbarHovered: boolean;
}

const Dropdown = ({ isNavbarHovered }: DropdownProps) => {
  const [currency, setCurrency] = React.useState("USD");

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };

  return (
    <CurrencySelector
      value={currency}
      onChange={handleCurrencyChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      isNavbarHovered={isNavbarHovered} // Pass hover state to styled component
    >
      <MenuItem value="USD">$ USD</MenuItem>
      <MenuItem value="EUR">€ EUR</MenuItem>
      <MenuItem value="GBP">£ GBP</MenuItem>
    </CurrencySelector>
  );
};

export default Dropdown;
