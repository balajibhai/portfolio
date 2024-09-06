import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system"; // Import the styled API from MUI
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";

// Define your styled components using MUI's styled API
const AppContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Arial, sans-serif",
}));

const BackgroundVideoContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  overflow: "hidden",
});

const Video = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const LinkButton = styled(Link)({
  color: "#61dafb",
  textDecoration: "none",
  padding: "10px",
  fontSize: "1.2rem",
});

const ParentLinkContainer = styled("div")({
  display: "flex",
  width: "500px",
});

const ChildLinkContainer = styled("div")({
  display: "flex",
  gap: "20px",
});

function App() {
  const [menuValue, setMenuValue] = useState("All");
  const onMenuChange = (value: string) => {
    setMenuValue(value);
  };
  const location = useLocation();

  const handleRoute = () => {
    if (location.pathname === "/link1") {
      return (
        <div>
          <SegmentedControl onMenuChange={onMenuChange} />
          <div style={{ padding: "50px" }}>
            <DraggableCard currentMenu={menuValue} />
          </div>
        </div>
      );
    }
  };

  const redirectUI = () => {
    if (location.pathname === "/") {
      return (
        <>
          <LinkButton to="/link1">Go to Link 1</LinkButton>
          <LinkButton to="/link2">Go to Link 2</LinkButton>
        </>
      );
    }
    return <div style={{ backgroundColor: "#1a1a1a" }}></div>;
  };

  return (
    <AppContainer
      className={location.pathname === "/link1" ? "first-link" : "App"}
    >
      {location.pathname === "/link1" && (
        <BackgroundVideoContainer>
          <Video autoPlay loop muted>
            <source src="/ocean.mp4" type="video/mp4" />
          </Video>
        </BackgroundVideoContainer>
      )}

      <ParentLinkContainer>
        <ChildLinkContainer>{redirectUI()}</ChildLinkContainer>
      </ParentLinkContainer>
      {handleRoute()}
    </AppContainer>
  );
}

export default App;
