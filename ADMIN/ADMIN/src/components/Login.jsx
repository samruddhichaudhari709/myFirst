import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome back to Edu Bridge!");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>📘 Edu Bridge</h1>
        <p>Log in and explore your future in education!</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
          alt="books illustration"
        />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>Don’t have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}
