import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/Akshat.pdf";
import { FaDownload } from "react-icons/fa";

const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="removedbg.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li></li>
      </ul>
      <button className="resume-button">
        <FaDownload style={{ marginRight: "5px" }} />
        <a
          href={Resume}
          download="Akshat_Kumar_Resume"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          RESUME
        </a>
      </button>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navigation;
