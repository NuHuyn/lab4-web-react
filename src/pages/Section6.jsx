import { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import ThemeButton from "../components/ThemeButton";
import "../section.css";

export default function Section6() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <h1 className="section-title">Section 6 – Context API</h1>

      <div className="section-card">
        <h2>Theme Switcher (Context)</h2>

        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <button
            onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
            style={{
              padding:"8px 12px",
              borderRadius:8,
              border:"none",
              background:"#6a2fb2",
              color:"white",
              cursor:"pointer"
            }}
          >
            Toggle theme
          </button>

          <ThemeContext.Provider value={theme}>
            <ThemeButton />
          </ThemeContext.Provider>
        </div>

        <p style={{marginTop:12,color:"#555"}}>
          The ThemeButton reads the theme from Context deep in the tree.
        </p>
      </div>
    </>
  );
}
