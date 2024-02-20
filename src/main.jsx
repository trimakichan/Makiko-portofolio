import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { NavProvider } from "./contexts/NavContext.jsx";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenSizeProvider>
    <ThemeProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </ThemeProvider>
    </ScreenSizeProvider>
  </React.StrictMode>
);
