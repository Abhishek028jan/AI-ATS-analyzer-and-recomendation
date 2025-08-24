import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary border border-primary shadow-lg sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">AI Hiring Platform</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="p-2 d-flex gap-3" id="navbarNav">
        <ul className="d-flex gap-3 navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/how-it-works">How It Works</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/why-choose-us">Why Choose Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Link to="/signup">
          <button className="btn btn-light text-primary w-30">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-light text-primary w-30">Login</button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

