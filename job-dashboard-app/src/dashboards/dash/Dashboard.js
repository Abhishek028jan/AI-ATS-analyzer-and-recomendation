import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Greeting from './Greeting';
import JobRecommendations from './Job Recomend';
import ApplicationTracker from './Application Tracker';
import Header from './Header';
import ResumeBuilder from '../resumebuilderpage/ResumeBuilder';

const Dashboard = () => {
  return (
    <div className="bg-dark text-light p-4 vh-100 vw-100 border border-secondary rounded flex-grow-1">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Greeting />
            <JobRecommendations />
            <ApplicationTracker />
          </>
        } />
        <Route path="/buildresume" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Dashboard;