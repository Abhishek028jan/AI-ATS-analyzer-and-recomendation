import React from 'react';

const JobRecommendations = () => {
  return (
    <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4">Recommended Jobs</h3>
          <span className="text-muted">&gt;</span>
        </div>
        <div className="list-group">
          <div className="list-group-item bg-secondary text-light d-flex justify-content-between align-items-center">
            <div>
              <p className="fw-bold mb-0">Software Engineer</p>
              <p className="text-muted mb-0">ABC Tech</p>
            </div>
            <p className="text-muted mb-0">3 Maniza</p>
            <button className="btn btn-primary">Apply</button>
          </div>
          <div className="list-group-item bg-secondary text-light d-flex justify-content-between align-items-center">
            <div>
              <p className="fw-bold mb-0">Data Analyst</p>
              <p className="text-muted mb-0">X.Tz Inc.</p>
            </div>
            <p className="text-muted mb-0">49 Makics</p>
            <button className="btn btn-primary">Apply</button>
          </div>
          <div className="list-group-item bg-secondary text-light d-flex justify-content-between align-items-center">
            <div>
              <p className="fw-bold mb-0">Product Manager</p>
              <p className="text-muted mb-0">125 Solutions</p>
            </div>
            <p className="text-muted mb-0">39 Matching</p>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
          
      );
};

export default JobRecommendations;