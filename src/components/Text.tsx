import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const NavLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: "#007BFF",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

interface textProps {
  variant:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "body2"
    | "body1"
    | "subtitle1"
    | "subtitle2"
    | "overline";
  content: string;
  sx?: object;
  component?: string;
}

const Text = ({ variant, content, sx, component }: textProps) => {
  if (component === "Typography") {
    return (
      <Typography variant={variant} sx={sx}>
        {content}
      </Typography>
    );
  }
  return <NavLink variant={variant}>{content}</NavLink>;
};

export default Text;
