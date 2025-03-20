import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./assets/styles/styles.css";
 // Import styles

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
