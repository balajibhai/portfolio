import { Routes, Route, Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { styled } from "@mui/system";
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";
import Voyage from "./components/Voyage";

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
  const onMenuChange = useCallback((value: string) => {
    setMenuValue(value);
  }, []);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/link1"
          element={
            <PageWithBackgroundVideo
              onMenuChange={onMenuChange}
              menuValue={menuValue}
            />
          }
        />
        <Route path="/link2" element={<Voyage />} />
      </Routes>
    </AppContainer>
  );
};

// Home component for displaying the main links
const Home = () => {
  return (
    <ParentLinkContainer>
      <ChildLinkContainer>
        <LinkButton to="/link1">Go to Link 1</LinkButton>
        <LinkButton to="/link2">Go to Link 2</LinkButton>
      </ChildLinkContainer>
    </ParentLinkContainer>
  );
};

// Component for the first page with video background and draggable cards
interface PageWithBackgroundVideoProps {
  menuValue: string;
  onMenuChange: (value: string) => void;
}

const PageWithBackgroundVideo = ({
  menuValue,
  onMenuChange,
}: PageWithBackgroundVideoProps) => {
  return (
    <>
      <BackgroundVideoContainer>
        <Video autoPlay loop muted>
          <source src="/ocean.mp4" type="video/mp4" />
        </Video>
      </BackgroundVideoContainer>
      <SegmentedControl onMenuChange={onMenuChange} />
      <div style={{ padding: "50px" }}>
        <DraggableCard currentMenu={menuValue} />
      </div>
    </>
  );
};

export default App;
