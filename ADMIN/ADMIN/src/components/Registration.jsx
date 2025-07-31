
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to Edu Bridge!");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>📚 Edu Bridge</h1>
        <p>Connect with your dream college. Start your journey today!</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="student with book"
        />
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="college" placeholder="Interested College" onChange={handleChange} required />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
  );
}
