import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <Mail size={20} /> &nbsp;
          <a href="mailto:your-email@example.com">munshijanvi@gmail.com</a>
        </p>
        <p>
          <Linkedin size={20} /> &nbsp;
          <a href="https://www.linkedin.com/in/janvi-munshi-313a45318/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <Github size={20} /> &nbsp;
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
