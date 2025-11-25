import "../section.css";
import ControlledSignup from "../components/ControlledSignup";

export default function Section4() {
  return (
    <>
      <h1 className="section-title">Section 4 – Controlled Forms</h1>

      <div className="section-card">
        <h2>Controlled Signup</h2>
        <ControlledSignup />
      </div>
    </>
  );
}
