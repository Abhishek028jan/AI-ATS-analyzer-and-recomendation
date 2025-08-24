import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";

// Landing page sections
import HeroSection from "./landingpage/HeroSection";
import KeyFeatures from "./landingpage/KeyFeatures";
import HowItWorks from "./landingpage/HowItWorks";
import WhyChooseATS from "./landingpage/WhyChooseATS";
import CallToAction from "./landingpage/CallToAction";

// Pages
import Login from "./pages/login";
import Signup from "./pages/signup";

const root = ReactDOM.createRoot(document.getElementById("root"));

function LandingPage() {
  return (
    <div className="container-fluid p-0">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <WhyChooseATS />
      <CallToAction />
    </div>
  );
}

root.render(
  <Router>
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar always at top */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  </Router>
);

