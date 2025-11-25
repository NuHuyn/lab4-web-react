import { useEffect, useState } from "react";
import "./PostFetcher.css";

export default function PostFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("HTTP error " + res.status);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="fetch-box">
      <h3>Fetch Post</h3>

      {loading && <p className="loading">Loading…</p>}
      {error && <p className="error">Error: {error.message}</p>}
      {data && <p className="success">{data.title}</p>}
    </div>
  );
}
