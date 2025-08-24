import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleResumeClick = (e) => {
    e.preventDefault();
    navigate('/buildresume');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="col-md-2 d-flex flex-column vh-100 bg-dark text-light p-3 border border-secondary rounded shadow-sm" style={{ width: '250px' }}>
      <ul className="nav flex-column">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <a href="/" className={`nav-link ${isActive('/') ? 'text-info active' : 'text-light'}`} style={{ background: isActive('/') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/') ? '#ffffff' : '' }}>
            <span role="img" aria-label="home">🏠</span> Dashboard
          </a>
        </li>
        <li className={`nav-item ${isActive('/buildresume') ? 'active' : ''}`}>
          <a href="/buildresume" onClick={handleResumeClick} className={`nav-link ${isActive('/buildresume') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/buildresume') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/buildresume') ? '#ffffff' : '' }}>
            <span role="img" aria-label="buildresume">📄</span> Build Resumes
          </a>
        </li>
        <li className={`nav-item ${isActive('/skill-gap-analysis') ? 'active' : ''}`}>
          <a href="/skill-gap-analysis" className={`nav-link ${isActive('/skill-gap-analysis') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/skill-gap-analysis') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/skill-gap-analysis') ? '#ffffff' : '' }}>
            <span role="img" aria-label="analysis">📊</span> Skill Gap Analysis
          </a>
        </li>
        <li className={`nav-item ${isActive('/recommended-jobs') ? 'active' : ''}`}>
          <a href="/recommended-jobs" className={`nav-link ${isActive('/recommended-jobs') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/recommended-jobs') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/recommended-jobs') ? '#ffffff' : '' }}>
            <span role="img" aria-label="jobs">💼</span> Recommended Jobs
          </a>
        </li>
        <li className={`nav-item ${isActive('/course-recommendations') ? 'active' : ''}`}>
          <a href="/course-recommendations" className={`nav-link ${isActive('/course-recommendations') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/course-recommendations') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/course-recommendations') ? '#ffffff' : '' }}>
            <span role="img" aria-label="courses">📚</span> Course Recommendations
          </a>
        </li>
        <li className={`nav-item ${isActive('/applications') ? 'active' : ''}`}>
          <a href="/applications" className={`nav-link ${isActive('/applications') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/applications') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/applications') ? '#ffffff' : '' }}>
            <span role="img" aria-label="applications">📩</span> Applications
          </a>
        </li>
        <li className={`nav-item ${isActive('/settings') ? 'active' : ''}`}>
          <a href="/settings" className={`nav-link ${isActive('/settings') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/settings') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/settings') ? '#ffffff' : '' }}>
            <span role="img" aria-label="settings">⚙️</span> Settings
          </a>
        </li>
        <li className={`nav-item ${isActive('http://localhost:3000') ? 'active' : ''}`}>
          <a href="http://localhost:3000" className={`nav-link ${isActive('http://localhost:3000') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('http://localhost:3000') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('http://localhost:3000') ? '#ffffff' : '' }}>
            <span role="img" aria-label="logout">🚪</span> Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};  

export default Sidebar;