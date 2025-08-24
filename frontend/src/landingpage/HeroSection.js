import React from "react";

const HeroSection = () => (
  <section className="bg-light py-5">
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
      {/* Left Content */}
      <div className="text-start mb-4 mb-md-0" style={{ maxWidth: "500px" }}>
        <h1 className="fw-bold mb-3" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
          Hire Smarter. Apply Faster. With AI-Powered Resume Scoring & Job
          Matching.
        </h1>
        <p className="text-muted mb-4">
          Our AI tracks, scores, and matches resumes in seconds—making hiring
          and job hunting easier than ever.
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-primary px-4 py-2 fw-semibold rounded">
            Post a Job
          </button>
          <button className="btn btn-success px-4 py-2 fw-semibold rounded">
            Upload Resume
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="text-center">
        <img
          src="/ai banner.png" // replace with your uploaded image path
          alt="AI Resume Scoring"
          className="img-fluid"
          style={{ maxHeight: "250px" }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
