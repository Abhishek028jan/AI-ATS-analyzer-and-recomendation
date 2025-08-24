import React from 'react';

const Greeting = () => {
  return (
    <div className="d-flex align-items-start mb-4 gap-5 flex-wrap text-light">
      {/* Greeting Section */}
      <div>
        <h2 className="h3 fw-bold">Hi, Rakshith!</h2>
        <p className="text-secondary">Here's your career progress.</p>
      </div>

      {/* Circular Progress */}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="position-relative" style={{ width: '128px', height: '128px' }}>
          <div
            className="position-absolute top-0 start-0 rounded-circle"
            style={{
              width: '128px',
              height: '128px',
              background: 'conic-gradient(#0d6efd 0% 78%, #3a3a3a 78% 100%)',
            }}
          />
          <div 
            className="position-absolute top-50 start-50 translate-middle bg-dark rounded-circle d-flex align-items-center justify-content-center" 
            style={{ width: '96px', height: '96px' }}
          >
            <span className="fs-4 fw-bold text-light">78%</span>
          </div>
        </div>
        <p className="mt-2 fw-medium text-secondary">Score</p>
      </div>

      {/* Skill Summary */}
      <div className="text-start">
        <p className="fw-semibold text-light mb-1">Skill Gap Summary</p>
        <p className="text-warning mb-0">3 skills Missing</p>
      </div>

      {/* Recommendations */}
      <div className="text-start">
        <p className="fw-semibold text-light mb-2">Recommended Globe</p>
        <a href="#" className="d-block mb-2 text-info fw-medium">View Courses</a>
        <button className="btn btn-primary px-4 rounded-pill">Improve</button>
      </div>
    </div>
  );
};

export default Greeting;
