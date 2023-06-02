import React from "react";
import Header from "@components/Header/Header";
import Intro from "@components/Intro/Intro";
import About from "@components/About/About";
import Skill from "@components/Skill/Skill";
import Project from "@components/Project/Project";
import Footer from "@components/Footer/Footer";
import Contact from "@components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
