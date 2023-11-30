import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { styledTheme } from "theme/themes";
import { DataProvider } from "contexts/DataContext/DataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider theme={styledTheme}>
        <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
