import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css'; // Importă stilurile globale

// Importă componentele tale
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Importă Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
