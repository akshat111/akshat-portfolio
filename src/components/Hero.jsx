import React from "react";
import DITpic from "../assets/DITpic.jpg";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h2>My Name is Akshat Kumar</h2>
        <p>
          I'm Akshat Kumar, a Computer Science graduate specializing in Cyber
          Security and Digital Forensics. I have a strong passion for web
          development, cybersecurity, and building innovative solutions.
        </p>
        <p>
          I have experience in{" "}
          <strong>React.js, Node.js, MongoDB, and cybersecurity</strong>. I’ve
          developed multiple projects, including a cryptocurrency tracker, and
          an Weather App.
        </p>
        <p>
          My goal is to leverage my technical skills to create impactful
          software solutions and enhance digital security.
        </p>
        <div className="hero-btn"></div>
      </div>
      <div className="hero-image">
        <img src={DITpic} alt="Akshat at DIT University" />
      </div>
    </main>
  );
};

export default HeroSection;
