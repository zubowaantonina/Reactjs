import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppBar from "./AppBar";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AppBar />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
