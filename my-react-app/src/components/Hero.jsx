import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h2>Hello! I'm Janvi Munshi</h2>
        <p>Final-year Computer Engineering student specializing in Machine Intelligence and Data Science.</p>
        <a href="#projects" className="btn">View Projects</a>
        <a href="resume.pdf" className="btn" download>Download Resume</a>
      </div>
    </section>
  );
}

export default Hero;
