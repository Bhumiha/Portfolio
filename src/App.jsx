import React from 'react';
import "./App.css"

function App() {
  return (
    <>
    <nav id="desktop-nav">
      <div class="logo">Raunak Mishra</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">Raunak Mishra</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon"onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
    <section id="profile">
      
        <img src="p.jpg" alt="Raunak mishra profile picture" class="r" />
      
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Raunak mishra</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('RaunakMishra_InternshalaResume (4).pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://https://www.linkedin.com/in/raunak-mishra-8ba9a71b8//'"
          />
          <img
            src="github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
      
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src="download.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p> fresher <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src="education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>computer science<br />B.tech Degree</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>intermediat</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                <h3>Tailwind css</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>javaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React js</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
    <section id="projects">
      <p class="section__text__p1"></p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="project-2.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
              
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="project-3.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
              
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">Raunakkumarmishra045@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/raunak-mishra-8ba9a71b8/">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Raunak. All Rights Reserved.</p>
    </footer>
    </>
  );
}

export default App;
