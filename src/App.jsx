import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Practice from "./components/practice/Practice";

function App() {
  return (
    <div className={styles.App}>
      <Practice />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
