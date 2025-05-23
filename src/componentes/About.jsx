import React from "react";
import "../hojas-de-estilo/about.css";
import SplitText from "../componentes/SplitText";
import SpotlightCard from "./SpotlightCard";

// Importa los SVGs
import htmlSVG from "../assets/HTML5.svg";
import cssSVG from "../assets/CSS3.svg";
import jsSVG from "../assets/JAVASCRIPT.svg";
import reactSVG from "../assets/REACT.svg";
import gitSVG from "../assets/GIT.svg";
import nodeSVG from "../assets/NODEJS.svg";
import mongoSVG from "../assets/MONGODB.svg";
import postgreSVG from "../assets/POSTGRESQL.svg";
import expressSVG from "../assets/EXPRESS.svg";
import javaSVG from "../assets/JAVA.svg";

const About = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="about-container">
      <main>
        <article className="about-content">
          <header className="title-container">
            <h2 className="title">
              <SplitText
                text="About Me"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h2>
            <hr className="section-hr" />
          </header>
          <p>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              Hi! I'm Mathias, a 21-year-old Full Stack Developer with a passion
              for creating dynamic and scalable web applications. I'm currently
              studying Computer Engineering with a focus on Systems Analysis. I
              enjoy working on both the frontend and backend of projects,
              bringing ideas to life through clean, efficient, and
              well-structured code. I’m constantly seeking new challenges that
              allow me to grow, improve my skills, and contribute to impactful
              digital solutions. Driven by curiosity and a strong attention to
              detail, I thrive on solving problems and building tools that make
              a difference.
            </SpotlightCard>
          </p>
        </article>
        <article className="about-content">
          <header className="title-container">
            <h2 className="title">
              <SplitText
                text="Technologies"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h2>
            <hr className="section-hr" />
          </header>
          <section>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="tech-grid">
                <div className="tech-item">
                  <img src={htmlSVG} alt="React" />
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <img src={cssSVG} alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                  <img src={jsSVG} alt="HTML5" />
                  <span>HTML5</span>
                </div>
                <div className="tech-item">
                  <img src={reactSVG} alt="CSS3" />
                  <span>CSS3</span>
                </div>
                <div className="tech-item">
                  <img src={gitSVG} alt="Git" />
                  <span>Git</span>
                </div>
                <div className="tech-item">
                  <img src={nodeSVG} alt="Node" />
                  <span>Node</span>
                </div>
                <div className="tech-item">
                  <img src={expressSVG} alt="Express" />
                  <span>Express</span>
                </div>
                <div className="tech-item">
                  <img src={mongoSVG} alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <img src={postgreSVG} alt="PostgreSQL" />
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-item">
                  <img src={javaSVG} alt="Java" />
                  <span>Java</span>
                </div>
              </div>
            </SpotlightCard>
          </section>
        </article>
      </main>
    </div>
  );
};

export default About;
