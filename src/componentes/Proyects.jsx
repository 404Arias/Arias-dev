import React from "react";
import "../hojas-de-estilo/Proyects.css";
import SplitText from "../componentes/SplitText";
import SpotlightCard from "./SpotlightCard";
import Carousel from "./Carousel";

import RollingGallery from "./RollingGallery";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Proyects = () => {
  return (
    <div className="Proyects-container">
      <main>
        <article className="about-content">
          <header className="title-container">
            <h2 className="title">
              <SplitText
                text=" Proyects"
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
              className="custom-spotlight-card-p"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="carousel-flex">
                <div className="carousel-item">
                  <Carousel
                    baseWidth={600}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
                <div className="carousel-item">
                  <Carousel
                    baseWidth={600}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
                <div className="carousel-item">
                  <Carousel
                    baseWidth={600}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
              </div>
            </SpotlightCard>
          </p>
        </article>
      </main>
    </div>
  );
};

export default Proyects;
