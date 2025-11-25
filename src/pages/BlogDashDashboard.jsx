import { Link } from "react-router-dom";
import useBlogFetch from "../hooks/useBlogFetch";

export default function BlogDashDashboard() {
  const { data, loading, error } = useBlogFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="section-card">
      <h2>BlogDash Dashboard</h2>

      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error.message}</p>}

      {data &&
        data.slice(0, 10).map((post) => (
          <p key={post.id}>
            <Link to={`/section8/dashboard/post/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </p>
        ))}
    </div>
  );
}
