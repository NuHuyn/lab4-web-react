import { useParams } from "react-router-dom";
import useBlogFetch from "../hooks/useBlogFetch";

export default function BlogDashPostDetail() {
  const { postId } = useParams();
  const { data, loading, error } = useBlogFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return (
    <div className="section-card">
      <h2>Post #{postId}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}
