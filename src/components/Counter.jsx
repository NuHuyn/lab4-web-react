import useLocalStorage from "../hooks/useLocalStorage";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useLocalStorage("myCounter", 0);

  return (
    <div className="counter-card">
      <h3>Persistent Counter</h3>
      <div className="controls">
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <div className="value">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <small className="hint">Value saved to localStorage; persists after refresh.</small>
    </div>
  );
}
