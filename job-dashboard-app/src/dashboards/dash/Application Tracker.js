import React from "react";

const ApplicationTracker = () => {
  return (
    <div>
      <h3 className="h4 mb-3">Application Tracker</h3>
      <div className="bg-secondary p-3 rounded">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <p className="fw-bold mb-0">Software Developer | Movatech</p>
            <p className="text-muted mb-0">Applied</p>
          </div>
          <span className="text-info">Applied</span>
        </div>
        <div className="progress" style={{ height: '8px' }}>
          <div className="progress-bar bg-primary" style={{ width: '25%' }}></div> {/* ~25% for "Applied" stage */}
        </div>
        <div className="d-flex justify-content-between text-muted mt-1">
          <span>Shortlisted</span>
          <span>Interview</span>
          <span>Rejected</span>
          <span>Hire</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;