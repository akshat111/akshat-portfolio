import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Cybersecurity", level: 70 },
];

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-600">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-300 h-3 rounded-md overflow-hidden mt-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-blue-600 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
