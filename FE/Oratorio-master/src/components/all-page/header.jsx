import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* === LEFT: Brand === */}
        <div className="header-left">
          <a href="/" className="header-brand">ORATORIO</a>
        </div>

        {/* === CENTER: Navigation Links === */}
        <div className="header-center">
          <a href="/" className="header-link">Home</a>
          <a href="/history" className="header-link">History</a>

          {/* History Dropdown */}
          <div
            className="header-dropdown"
            onMouseEnter={() => setIsHistoryOpen(true)}
            onMouseLeave={() => setIsHistoryOpen(false)}
          >
            <button className="header-link dropdown-toggle">
              Torio
              <svg
                className="chevron-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
              </svg>
            </button>
            {isHistoryOpen && (
              <div className="dropdown-menu">
                <a href="/ar" className="dropdown-item">🌀 AR Interface</a>
                <a href="/vr" className="dropdown-item">👓 VR Interface</a>
              </div>
            )}
          </div>
        </div>

        {/* === RIGHT: User Dropdown === */}
        <div className="header-right">
          <div
            className="user-dropdown"
            onClick={() => setIsUserOpen(!isUserOpen)}
          >
            <div className="user-icon-container">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="chevron-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
              </svg>
            </div>
            {isUserOpen && (
              <div className="dropdown-menu user-menu">
                <a href="/login" className="dropdown-item">Login</a>
                <a href="/register" className="dropdown-item">Register</a>
              </div>
            )}
          </div>

          {/* Hamburger Icon */}
          <div
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* === Mobile Navigation === */}
      <div className={`header-links-mobile ${isMenuOpen ? "active" : ""}`}>
        <a href="/" className="header-link">Home</a>
        <a href="/about" className="header-link">About</a>
        <a href="/history" className="header-link">History</a>
        <a href="/login" className="header-link">Login</a>
        <a href="/register" className="header-link">Register</a>
      </div>
    </header>
  );
}

export default Header;
