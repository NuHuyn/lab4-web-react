import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
