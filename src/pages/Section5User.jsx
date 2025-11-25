import { useParams } from "react-router-dom";
import "../section.css";

export default function Section5User() {
  const { userId } = useParams();

  return (
    <>
      <h1 className="section-title">Section 5 — User Profile</h1>

      <div className="section-card">
        <h2>Profile for user: {userId}</h2>
        <p>This page demonstrates <code>useParams()</code> and dynamic routing.</p>
      </div>
    </>
  );
}
