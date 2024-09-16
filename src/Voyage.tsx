import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Text from "./components/Text";
import Dropdown from "./components/Dropdown";
import Icons from "./components/Icons";
import NavbarContainer from "./components/NavbarContainer";
import { useState } from "react";
import PageWithBackgroundVideo from "./components/PageWithBackgroundVideo";

const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide the left section on smaller screens
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
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  const handleHoverChange = (hovered: boolean) => {
    setIsNavbarHovered(hovered);
  };

  return (
    <>
      <NavbarContainer onHoverChange={handleHoverChange}>
        {/* Left section */}
        <LeftSection>
          <Text variant="body1" content="Destinations" />
          <Text variant="body1" content="List your home" />
          <Text variant="body1" content="Offers" />
          <Text variant="body1" content="Journal" />
        </LeftSection>

        {/* Middle Section (Logo) */}
        <Text
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center" }}
          content="onefinestay"
          component="Typography"
        />

        {/* Right section */}
        <RightSection>
          <Dropdown isNavbarHovered={isNavbarHovered} />
          <Icons isNavbarHovered={isNavbarHovered} />
          <Text
            variant="body1"
            sx={{ display: { xs: "none", sm: "block" } }}
            content="Get in touch"
            component="Typography"
          />
        </RightSection>
      </NavbarContainer>
      <PageWithBackgroundVideo src="/nature.mp4"></PageWithBackgroundVideo>
    </>
  );
};

export default Navbar;
