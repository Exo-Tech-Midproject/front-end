import { createTheme } from "@mui/material/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f8af5",
    },
    medical: {
      main: "#1F485B",
      light: '#57A3C6',
      dark: '#112731',
      contrastText: '#fff'
    },
    background: {
      default: "#1F485B",
      secondary: "white"
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.6)",

    },
  },
  typography,
});

export default theme;
