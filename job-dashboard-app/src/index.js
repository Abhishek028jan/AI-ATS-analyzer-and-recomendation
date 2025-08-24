import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './dashboards/side/Sidebar';
import Dashboard from './dashboards/dash/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="d-flex vh-100 overflow-hidden">
      <Sidebar />
      <Dashboard />
    </div>
  </BrowserRouter>
);