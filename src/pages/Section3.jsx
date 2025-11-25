import PostFetcher from "../components/PostFetcher";
import "../section.css";

export default function Section3() {
  return (
    <>
      <h1 className="section-title">Section 3 – Fetch API</h1>
      <div className="section-card">
        <PostFetcher />
      </div>
    </>
  );
}
