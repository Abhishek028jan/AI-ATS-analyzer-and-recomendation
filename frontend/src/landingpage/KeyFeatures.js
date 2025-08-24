import React from 'react';

const KeyFeatures = () => (
  <section className="p-4 text-center">
    <h2 className="h3 text-dark mb-4">Key Features</h2>
    <div className="row row-cols-1 row-cols-md-2 g-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="col">
        <div className="p-3 bg-light rounded border border-dark shadow-lg" style={{ '--bs-border-opacity': .2 }}>
            
          <h3 className="h5 text-primary mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
</svg>AI Resume Scoring</h3>
          <p className="text-muted">Learn resume scoring</p>
        </div>
      </div>
      <div className="col">
        <div className="p-3 bg-light rounded border border-dark shadow-lg" style={{ '--bs-border-opacity': .2 }}>
          <h3 className="h5 text-primary mb-2">Skill Gap Analysis</h3>
          <p className="text-muted">Error job reator: neding</p>
        </div>
      </div>
      <div className="col">
        <div className="p-3 bg-light rounded border border-dark shadow-lg" style={{ '--bs-border-opacity': .2 }}>
          <h3 className="h5 text-primary mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" class="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
  <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>Course Recommendations</h3>
          <p className="text-muted">Rec. recommendations</p>
        </div>
      </div>
      <div className="col">
        <div className="p-3 bg-light rounded border border-dark shadow-lg" style={{ '--bs-border-opacity': .2 }}>
          <h3 className="h5 text-primary mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>Job Matching & Suggestions</h3>
          <p className="text-muted">Suggestions</p>
        </div>
      </div>
    </div>
  </section>
);

export default KeyFeatures;