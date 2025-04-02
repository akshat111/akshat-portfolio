import React from "react";
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";

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
              href="https://www.linkedin.com/in/kakshat111/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaEnvelope />{" "}
            <a href="mailto:kakshat111@gmail.com">
              Email: kakshat111@gmail.com
            </a>
          </li>
          <li>
            <FaInstagram />{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <FaGithub />{" "}
            <a
              href="https://github.com/akshat111"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
