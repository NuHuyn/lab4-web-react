import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogAuthContext } from "../context/BlogAuthContext";

export default function BlogDashLogin() {
  const { login } = useContext(BlogAuthContext);
  const nav = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const doLogin = (e) => {
    e.preventDefault();
    login(() => nav("/section8/dashboard"));
  };

  return (
    <div className="section-card" style={{ maxWidth: "400px" }}>
      <h2>BlogDash Login</h2>
      <form onSubmit={doLogin}>
        <input ref={inputRef} placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn">Log In</button>
      </form>
    </div>
  );
}
