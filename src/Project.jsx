import React from 'react';
//import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src="checkmark.png" alt="Checkmark" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="checkmark.png" alt="Checkmark" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              {/* Add more articles as needed */}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src="checkmark.png" alt="Checkmark" className="icon" />
                <div>
                  <h3>MySQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              {/* Add more articles as needed */}
            </div>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#projects'}
      />
    </section>
  );
};

export default Experience;
