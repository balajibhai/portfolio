import { styled } from "@mui/system";

// Component for the first page with video background and draggable cards
interface PageWithBackgroundVideoProps {
  children?: React.ReactNode;
  src: string;
}

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

const PageWithBackgroundVideo = ({
  children,
  src,
}: PageWithBackgroundVideoProps) => {
  return (
    <>
      <BackgroundVideoContainer>
        <Video autoPlay loop muted>
          <source src={src} type="video/mp4" />
        </Video>
      </BackgroundVideoContainer>
      {children}
    </>
  );
};

export default PageWithBackgroundVideo;
