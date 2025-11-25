import MouseTracker from "../components/MouseTracker";
import "../section.css";

export default function Section1() {
  return (
    <>
      <h1 className="section-title">Section 1 – useEffect</h1>
      <div className="section-card">
        <h2>Mouse Tracker</h2>
        <MouseTracker />
      </div>
    </>
  );
}
