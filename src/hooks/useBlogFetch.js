import { useEffect, useState } from "react";

export default function useBlogFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        if (!cancel) setData(json);
      } catch (err) {
        if (!cancel) setError(err);
      } finally {
        if (!cancel) setLoading(false);
      }
    }

    load();
    return () => (cancel = true);
  }, [url]);

  return { data, loading, error };
}
