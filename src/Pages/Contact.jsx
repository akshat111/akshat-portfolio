import React from "react";
import "./contact.css";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-details">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out through any of the platforms below:</p>
        <ul>
          <li>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/akshatkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaEnvelope />{" "}
            <a href="mailto:akshatkumar@example.com">
              Email: akshatkumar@example.com
            </a>
          </li>
          <li>
            <FaInstagram />{" "}
            <a
              href="https://www.instagram.com/akshatkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
