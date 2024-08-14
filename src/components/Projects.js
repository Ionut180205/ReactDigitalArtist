import React from 'react';
import './Projects.css';
import project1Image from '../assets/picasso1.jpg'; 
import project2Image from '../assets/Picasso2.jpg'; 
import project3Image from '../assets/Picasso3.jpg'; 

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
            <a href="https://ro.wikipedia.org/wiki/Pablo_Picasso" target="_blank" rel="noopener noreferrer">
              <img src={project1Image} alt="Project 1" className="project-image" />
            </a>
            <h3 className="project-title">Project 1</h3>
        </div>

        <div className="project-card">
            <a href="https://ro.wikipedia.org/wiki/Pablo_Picasso" target="_blank" rel="noopener noreferrer">
              <img src={project2Image} alt="Project 2" className="project-image" />
            </a>
            <h3 className="project-title">Project 2</h3>
        </div>
        <div className="project-card">
            <a href="https://ro.wikipedia.org/wiki/Pablo_Picasso" target="_blank" rel="noopener noreferrer">
              <img src={project3Image} alt="Project 3" className="project-image" />
            </a>
            <h3 className="project-title">Project 3</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
