import React from 'react';
import './About.css';
import artistImage from '../assets/Pablo_picasso_1.jpg'; 

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <img src={artistImage} alt="Artist" className="about-image" />
        <h2 className="about-name">Picasso</h2>
        <p className="about-description">
          I am a passionate digital artist. You can see all my work here. I hope you'll enjoy what you see.
        </p>
      </div>
    </section>
  );
}

export default About;
