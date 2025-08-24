import React from "react";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
      <h1 className="text-light">DASHBOARD</h1>
      <div className="d-flex align-items-center">
        <input
          type="text"
          placeholder="Search"
          className="form-control bg-secondary text-light border-0 rounded-pill"
          style={{ width: '250px' }}
        />
        <div className="ms-3 bg-secondary rounded-circle" style={{ width: '32px', height: '32px' }}></div> {/* User avatar */}
      </div>
    </div>
  );
}

export default Header;