import React from 'react';
//import './Profile.css';

const Profile = () => {
  return (
    <section id="profile">
      <img src="p.jpg" alt="Raunak Mishra profile" className="r" />
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Raunak Mishra</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('RaunakMishra_InternshalaResume (4).pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="linkedin.png"
            alt="LinkedIn"
            className="icon"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/raunak-mishra-8ba9a71b8/'}
          />
          <img
            src="github.png"
            alt="Github"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
