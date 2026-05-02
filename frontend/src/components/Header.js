import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login"; // redirect after logout
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Interview Preparation Helper</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cq/DSA">DSA</Link>
        <Link to="/cq/OOP">OOP</Link>
        <Link to="/cq/DBMS">DBMS</Link>
        <Link to="/cq/OS">OS</Link>
        <Link to="/cq/NETWORKING">NETWORKING</Link>
        <Link to="/cq/BEHAVIORAL">BEHAVIORAL</Link>
        <Link to="/find-job">Find Job</Link> 

        {/* Dynamic Login / Logout */}
        {!token ? (
          <Link to="/login" className="login-btn">Login</Link>
        ) : (
          <>
            {/* <span className="welcome-text">Hi, {username}</span> */}
            <Link to="/profile" className="welcome-text">
              Hi, {username}
            </Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

