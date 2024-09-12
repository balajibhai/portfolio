import { Routes, Route, Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { styled } from "@mui/system";
import SegmentedControl from "./components/SegmentedControl";
import DraggableCard from "./components/DraggableCard";
import Voyage from "./Voyage";
import PageWithBackgroundVideo from "./components/PageWithBackgroundVideo";

const AppContainer = styled("div")(() => ({
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Arial, sans-serif",
}));

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
              menuValue={menuValue}
              onMenuChange={onMenuChange}
              src="/ocean.mp4"
            >
              <SegmentedControl onMenuChange={onMenuChange} />
              <div style={{ padding: "50px" }}>
                <DraggableCard currentMenu={menuValue} />
              </div>
            </PageWithBackgroundVideo>
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

export default App;
