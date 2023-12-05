import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { NavProvider } from "./contexts/NavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </ThemeProvider>
  </React.StrictMode>
);
