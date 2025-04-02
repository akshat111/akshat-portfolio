import React from "react";
import "./AboutMe.css";
import profilePic from "../assets/profilePic.jpg";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>Akshat Kumar</strong>, a Computer Science graduate
            specializing in Cyber Security and Digital Forensics. I have a
            passion for developing web applications, creating impactful software
            solutions, and enhancing cybersecurity measures.
          </p>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Cyber Security </li>
        </ul>
      </div>

      <div className="hobbies">
        <h2>Hobbies & Interests</h2>
        <p>
          I enjoy watching movies, playing games, and exploring new tech trends.
          I'm also passionate about financial markets and gaining some knowledge
          in it.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
