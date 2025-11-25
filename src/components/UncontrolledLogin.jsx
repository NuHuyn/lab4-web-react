import { useRef } from "react";
import "./UncontrolledLogin.css";

export default function UncontrolledLogin() {
  const usernameRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    alert("Value: " + usernameRef.current.value);
  };

  return (
    <form className="login-box" onSubmit={submit}>
      <h3>Uncontrolled Login</h3>
      <input ref={usernameRef} placeholder="Enter username..." />
      <button>Submit</button>
    </form>
  );
}
