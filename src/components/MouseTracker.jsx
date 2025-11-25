/*import { useEffect } from "react";
import "./MouseTracker.css";

export default function MouseTracker() {
  useEffect(() => {
    const move = (e) =>
      console.log("X:", e.clientX, "Y:", e.clientY);

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="mouse-box">
      <h3>Tracking mouse...</h3>
      <p>Move your mouse and check console!</p>
    </div>
  );
}
*/
import { useEffect, useState } from "react";
import "./MouseTracker.css";

export default function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="mouse-box">
      <h3>Mouse Position</h3>
      <p>X: {pos.x}</p>
      <p>Y: {pos.y}</p>
    </div>
  );
}
