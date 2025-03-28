import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Crypto Place",
    description:
      "A cryptocurrency tracking app that displays real-time price data using the CoinGecko API.",
    technologies: ["React.js", "CoinGecko API"],
  },
  {
    title: "ThermoGlobe",
    description:
      "A weather app that provides temperature data of any location using the OpenWeather API.",
    technologies: ["React.js", "OpenWeather API"],
  },
  {
    title: "ImageCrypt",
    description:
      "An image encryption tool built in Java using XOR methods to secure image data.",
    technologies: ["Java", "XOR Encryption"],
  },
  {
    title: "IntelliChat",
    description:
      "A simple chatbot application similar to ChatGPT, built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "ChatGPT API"],
  },
  {
    title: "Jobzee",
    description:
      "A MERN stack job recruiting website for job seekers and employers to connect.",
    technologies: ["MERN Stack (MongoDB, Express, React, Node.js)"],
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <section id="projects">
        <h1>My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <h4>Technologies Used:</h4>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
