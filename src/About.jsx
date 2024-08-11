import React from 'react';
import './App.css';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container"></div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="download.png" alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>Fresher <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img src="education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>Computer Science<br />B.Tech Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum...
            </p>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
      />
    </section>
  );
};

export default About;
