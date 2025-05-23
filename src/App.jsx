import { useState } from "react";
import "./App.css";
import Hero from "./componentes/hero";
import About from "./componentes/About";
import Proyects from "./componentes/Proyects";
import Footer from "./componentes/footer";

function App() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="Proyects">
        <Proyects />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
