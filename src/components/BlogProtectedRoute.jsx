import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { BlogAuthContext } from "../context/BlogAuthContext";

export default function BlogProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(BlogAuthContext);

  return isAuthenticated ? children : <Navigate to="/section8/login" replace />;
}
