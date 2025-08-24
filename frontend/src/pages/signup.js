import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", password: "" });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setSuccess(true);
      setMessage("You have successfully signed up with us. Now please login.");
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "12px" }}>
        <h3 className="text-center mb-4">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Full Name</label>
            <input type="text" className="form-control" name="name" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email Address</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input type="tel" className="form-control" name="mobile" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
          <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </form>

        {/* Message after submission */}
        {message && (
          <div className={`text-center mt-3 ${success ? "text-success" : "text-danger"}`}>
            {success ? (
              <>
                {message} <br />
                <a href="/login" className="text-decoration-none">Go to Login</a>
              </>
            ) : (
              message
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;