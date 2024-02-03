import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ModalContextProvider} from "./context/ModalContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultColors = {
  primary: "#418F86",
  secondary: "#5dbaaf",
  error: "#DF1111",
  background: "#FFFFFF",
  text: "#000000",
};

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
  },
  palette: {
    primary: {
      main: defaultColors.primary,
    },
    secondary: {
      main: defaultColors.secondary,
    },
    error: {
      main: defaultColors.error,
    },
    background: {
      default: defaultColors.background,
    },
    text: {
      primary: defaultColors.text,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 650,
      lg: 900,
      xl: 1920,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
