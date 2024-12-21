import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Particle from "./components/Particle";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Particle />
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default App;
