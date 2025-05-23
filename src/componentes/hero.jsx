import React from "react";
import "../hojas-de-estilo/hero.css";
import GooeyNav from "./GooeyNav";
import SplitText from "./SplitText";
import TrueFocus from "./TrueFocus";
import ShinyText from "./ShinyText";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import Particles from "../Backgrounds/Particles/Particles";
import TiltedCard from "./TiltedCard";
import LogoG from "../imagenes/LogoGhibli.png";

const Hero = () => {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },

    { label: "Proyects", href: "#Proyects" },

    { label: "Blog", href: "#" },
  ];
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="container">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      <header className="nav-bar">
        <div className="logo-container">
          <h1 className="logo-arias">
            <SplitText
              text="Arias404"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
        </div>
        <nav className="nav-bar" aria-label="Main Navigation">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </nav>
      </header>

      <main className="info-container">
        <section>
          <h4>
            <strong>Hi!, my name is</strong>
          </h4>
          <TrueFocus
            sentence="Mathias Arias."
            manualMode={false}
            blurAmount={5}
            borderColor="#f3f3f3"
            animationDuration={2}
            pauseBetweenAnimations={1}
            className="TrueFocus"
          />
          <h3>FullStack Developer Junior.</h3>
        </section>
        <article className="info-p">
          <p>
            I am Mathias, a Full Stack Developer with experience in building
            scalable web solutions and end-to-end applications. I specialize in
            designing, implementing, and maintaining systems on both the
            client-side (frontend) and server-side (backend), using modern
            technologies such as JavaScript, React, Node.js, Express, Java, and
            both relational and non-relational databases like PostgreSQL and
            MongoDB.{" "}
            <strong>
              <a
                href="../imageness/CV.MathiasArias.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum
              </a>
            </strong>
          </p>
        </article>
        <footer className="shiny-button">
          <ShinyText
            text={<Linkedin />}
            text1={<Github />}
            text2={<Instagram />}
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </footer>
      </main>
      <aside className="card-container">
        <TiltedCard
          imageSrc={LogoG}
          altText="Mathias Arias Ghibli "
          captionText="Mathias Arias - Dev"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Mathias Arias - Dev</p>
          }
        />
      </aside>
    </div>
  );
};

export default Hero;
