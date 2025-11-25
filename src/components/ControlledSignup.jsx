import { useState } from "react";
import "./ControlledSignup.css";

export default function ControlledSignup() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted — check console");
  };

  return (
    <form className="signup-card" onSubmit={handleSubmit}>
      <h3>Create account</h3>

      <label>
        Email
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          type="email"
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
          type="password"
          required
        />
      </label>

      <div className="actions">
        <button type="submit">Register</button>
        <small className="hint">This is a controlled component — state is source of truth.</small>
      </div>
    </form>
  );
}
