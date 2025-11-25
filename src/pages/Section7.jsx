import "../section.css";
import Counter from "../components/Counter";

export default function Section7() {
  return (
    <>
      <h1 className="section-title">Section 7 – Custom Hooks</h1>

      <div className="section-card">
        <h2>useLocalStorage Hook — persistent counter</h2>
        <Counter />
      </div>
    </>
  );
}
