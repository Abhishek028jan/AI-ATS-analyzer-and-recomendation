import React from "react";

const WhyChooseATS = () => (
  <section className="py-5">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Column - Bullet Points */}
        <div className="col-md-7">
          <h2 className="h4 fw-bold mb-4">Why Choose Our ATS</h2>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              <span className="text-primary me-2">•</span> Saves Time in Hiring
            </li>
            <li className="mb-2">
              <span className="text-primary me-2">•</span> Improves Candidate Quality
            </li>
            <li className="mb-2">
              <span className="text-primary me-2">•</span> Personalized Job & Course Recommendations
            </li>
            <li className="mb-2">
              <span className="text-primary me-2">•</span> Works for Freshers & Experienced Professionals
            </li>
          </ul>
        </div>

        {/* Right Column - Testimonial Box */}
        <div className="col-md-5">
          <div className="p-4 rounded bg-light">
            <h5 className="fw-bold mb-3">Testimonials</h5>
            <p className="fst-italic text-muted mb-1">
              "We reduced hiring time by 40% thanks to this ATS!"
            </p>
            <small className="text-muted">team tjit</small>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseATS;
