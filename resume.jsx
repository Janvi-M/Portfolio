import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Janvi Munshi</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
              <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center p-16">
        <h2 className="text-3xl font-bold">Hello! I'm Janvi Munshi</h2>
        <p className="mt-4">Final-year Computer Engineering student specializing in Machine Intelligence and Data Science.</p>
        <div className="mt-6">
          <a href="#projects" className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-4">View Projects</a>
          <a href="resume.pdf" className="bg-white text-blue-600 px-4 py-2 rounded-lg" download>Download Resume</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-600 mt-2 block">View Details</a>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-gray-100 p-8 text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4">Driven by curiosity and innovation, I specialize in Machine Intelligence, Data Science, and software development.</p>
        <p>Equipped with strong problem-solving skills and hands-on experience in AI/ML & web development.</p>
        <p>I am eager to apply my skills to real-world challenges and contribute meaningfully with dedication and drive.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white p-8 text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="mt-4"><i className="fas fa-envelope"></i> Email: munshijanvi@gmail.com</p>
        <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/janvi-munshi-313a45318/" className="text-blue-400">LinkedIn</a></p>
        <p><i className="fab fa-github"></i> <a href="https://github.com/Janvi-M" className="text-blue-400">GitHub</a></p>
        <p><i className="fas fa-map-marker-alt"></i> Bangalore</p>
      </section>
    </div>
  );
};

const projects = [
  { title: "Emotion-Based Music System", description: "Facial recognition-based emotion detection system generating AI-based music recommendations.", link: "https://github.com/Janvi-M/Mood-Melody" },
  { title: "Medical Query Answering System", description: "Context-aware medical Q&A system leveraging GooglePaLM LLMs and FAISS vector databases.", link: "https://github.com/Janvi-M/Medical-Query-Answering-System-using-LLMs-and-Vector-Databases" },
  { title: "Secure Multi-Client File Transfer System", description: "Python-based system with authentication, concurrency, and secure file operations.", link: "https://github.com/Janvi-M/Secure-Multi-Client-File-Transfer-System" },
  { title: "Smart Home Automation System", description: "Implemented a Smart Home Automation System using Python and MySQL.", link: "https://github.com/Janvi-M/Smart-Home-Automation-System-Using-MySQL-and-Python" },
  { title: "Water-Level Monitoring System", description: "Arduino-based water level and turbidity monitoring system with real-time alerts.", link: "https://github.com/Janvi-M/Arduino-Based-Water-Level-and-Turbidity-Monitoring-System" }
];

const skills = [
  "Generative AI, Deep Learning & Machine Learning",
  "Big Data & Data Analytics",
  "SQL (MySQL) & NoSQL (MongoDB)",
  "Python, C, C++, Java, R, JavaScript",
  "Web Development (HTML, CSS, JavaScript, React, Node.js)"
];

export default Portfolio;
