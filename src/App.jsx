import { useState } from "react";
import "./App.css";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Proyects from "./componentes/Proyects";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="proyects">
        <Proyects />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
