import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CurrencySelector = styled(Select)(({ theme }) => ({
  marginRight: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
const Dropdown = () => {
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
    >
      <MenuItem value="USD">$ USD</MenuItem>
      <MenuItem value="EUR">€ EUR</MenuItem>
      <MenuItem value="GBP">£ GBP</MenuItem>
    </CurrencySelector>
  );
};

export default Dropdown;
