import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { NavProvider } from "./contexts/NavContext.jsx";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <ThemeProvider>
    <ScreenSizeProvider>
        <NavProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </NavProvider>
    </ScreenSizeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
