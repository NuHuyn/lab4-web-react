import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./ThemeButton.css";

export default function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button className={`theme-btn theme-${theme}`}>
      Theme is: {theme}
    </button>
  );
}
