import React from "react";
import Akshat from "../assets/Akshat.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <center>
        <h2 className="resume-heading">My Resume</h2>
      </center>
      <div className="resume-viewer">
        <embed
          src={Akshat}
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Akshat Kumar Resume"
        />
      </div>
    </section>
  );
};

export default Resume;
