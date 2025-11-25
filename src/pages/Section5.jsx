import { Link, useNavigate } from "react-router-dom";
import "../section.css";
import "./Section5.css";

export default function Section5() {
  const nav = useNavigate();

  return (
    <>
      <h1 className="section-title">Section 5 – React Router (Demo)</h1>

      <div className="section-card">
        <h2>Simple Router Demo</h2>

        <div className="grid">
          <div className="box">
            <h3>Link demo</h3>
            <p>Navigate to a user profile page using &lt;Link&gt;.</p>
            <Link to="/section5/user/123" className="btn">Open User 123</Link>
          </div>

          <div className="box">
            <h3>useNavigate demo</h3>
            <p>Programmatically navigate back to Section 1.</p>
            <button className="btn" onClick={() => nav("/section1")}>Go to Section 1</button>
          </div>
        </div>

        <p className="note">Also supports dynamic route: <code>/section5/user/:userId</code></p>
      </div>
    </>
  );
}
