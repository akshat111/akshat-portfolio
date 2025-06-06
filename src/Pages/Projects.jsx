import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, project and resume.",
    technologies: ["React.js"],
    liveLink: "https://akshat-portfolio-111.vercel.app/",
  },
  {
    title: "Crypto Place",
    description:
      "A cryptocurrency tracking app that displays real-time price data using the CoinGecko API.",
    technologies: ["React.js", "CoinGecko API"],
    liveLink: "https://blockchain-buzz.vercel.app/",
  },
  {
    title: "ThermoGlobe",
    description:
      "A weather app that provides temperature data of any location using the OpenWeather API.",
    technologies: ["React.js", "OpenWeather API"],
    liveLink: "https://thermoglobe.vercel.app/",
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
    githubLink: "https://github.com/akshat111/IntelliChat",
  },
  {
    title: "Jobzee",
    description:
      "A MERN stack job recruiting website for job seekers and employers to connect.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/akshat111/JobZee",
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

              {/* 🔗 Show "View Live" button only if the project has a live link */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-button"
                >
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  GitHub Link
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
