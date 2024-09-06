import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";

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

const App = () => {
  const [menuValue, setMenuValue] = useState("All");
  const location = useLocation();

  const onMenuChange = useCallback((value: string) => {
    setMenuValue(value);
  }, []);

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
        <ChildLinkContainer>
          <RedirectUI location={location} />
        </ChildLinkContainer>
      </ParentLinkContainer>

      <RouteHandler
        location={location}
        menuValue={menuValue}
        onMenuChange={onMenuChange}
      />
    </AppContainer>
  );
};

// Functional component for handling routes
interface RouteHandlerProps {
  location: ReturnType<typeof useLocation>;
  menuValue: string;
  onMenuChange: (value: string) => void;
}

const RouteHandler = ({
  location,
  menuValue,
  onMenuChange,
}: RouteHandlerProps) => {
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
  return null;
};

// Functional component for handling redirection UI
interface RedirectUIProps {
  location: ReturnType<typeof useLocation>;
}

const RedirectUI = ({ location }: RedirectUIProps) => {
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

export default App;
