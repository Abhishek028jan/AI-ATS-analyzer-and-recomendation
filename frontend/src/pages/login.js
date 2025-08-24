import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [activeTab, setActiveTab] = useState("candidate");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      setMessage(res.data.message);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">

      <div className="container d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
          <h3 className="text-center mb-4 text-primary">Login</h3>

          {/* Tabs */}
          <div className="btn-group w-100 mb-3">
            <button
              className={`btn ${activeTab === "candidate" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setActiveTab("candidate")}
            >
              Candidate Login
            </button>
            <button
              className={`btn ${activeTab === "recruiter" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setActiveTab("recruiter")}
            >
              Recruiter Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-between mb-3">
              <a href="/forgot-password" className="text-decoration-none small">Forgot Password?</a>
              <a href="/signup" className="text-decoration-none small">Create Account</a>
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          <div className="text-center my-3">or</div>

          {/* Gmail Button */}
          <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            Login with Gmail
          </button>

          {message && <div className="text-center mt-3 text-danger small">{message}</div>}
        </div>
      </div>

    </div>
  );
}

export default Login;