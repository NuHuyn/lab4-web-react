import "../section.css";
import { Link } from "react-router-dom";

export default function Section8() {
  return (
    <>
      <h1 className="section-title">Section 8 – BlogDash (Capstone Project)</h1>

      <div className="section-card">
        <h2>BlogDash Overview</h2>
        <p>This project includes authentication, protected routes, data fetching, and dynamic routing.</p>

        <Link to="/section8/login" className="btn">
          Go to BlogDash Login
        </Link>
      </div>
    </>
  );
}
