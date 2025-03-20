import React from "react";

const projects = [
  {
    title: "Emotion-Based Music System",
    description: "Facial recognition-based emotion detection system generating AI-based music recommendations using OpenCV, DeepFace, and MusicGen.",
    link: "https://github.com/Janvi-M/Mood-Melody",
  },
  {
    title: "Medical Query Answering System",
    description: "Context-aware medical Q&A system leveraging GooglePaLM LLMs and FAISS vector databases for precise responses.",
    link: "https://github.com/Janvi-M/Medical-Query-Answering-System-using-LLMs-and-Vector-Databases",
  },
  {
    title: "Secure Multi-Client File Transfer System",
    description: "Python-based system with authentication, concurrency, and secure file operations for scalable data transfer.",
    link: "https://github.com/Janvi-M/Secure-Multi-Client-File-Transfer-System",
  },
  {
    title: "Smart Home Automation System",
    description: "Implemented a Smart Home Automation System using Python and MySQL for efficient device management and maintenance tracking.",
    link: "https://github.com/Janvi-M/Smart-Home-Automation-System-Using-MySQL-and-Python",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
