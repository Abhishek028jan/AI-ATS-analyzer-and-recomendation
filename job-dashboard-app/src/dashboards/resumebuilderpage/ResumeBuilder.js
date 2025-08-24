import React from 'react';

const ResumeBuilder = () => {
  return (
    <div className="bg-dark text-light p-4">
      <h1 className="display-4">Resume Builder</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control bg-secondary text-light" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control bg-secondary text-light" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Experience</label>
          <textarea className="form-control bg-secondary text-light" placeholder="Describe your experience"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save Resume</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;