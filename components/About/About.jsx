import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col xl:flex-row xl:mx-24 mx-10 xl:pt-36 pt-16 justify-around items-center min-h-sectionHeight"
    >
      <div className="xl:w-6/12 w-full flex flex-col justify-center order-1 xl:order-first">
        <h1 className="font-extrabold xl:text-6xl text-3xl text-textColor mb-7 text-center xl:text-left pt-8 xl:pt-0">
          About <span className="text-primaryColor">me</span>
        </h1>
        <h2 className="xl:text-2xl text-1xl mb-2 font-bold text-textColor text-center xl:text-left ">
          A dedicated Front-end Developer based in Hồ Chí Minh City, Việt Nam.
        </h2>
        <p className="mb-6 leading-relaxed text-sm text-center xl:text-left">
          As a Front-End Developer. I possess an impressive arsenal of skills in
          HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
          and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques, I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
        <div className="flex justify-center items-center"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="xl:w-96 xl:h-96 w-48  overflow-hidden ">
          <img className="" src="assets\images\poster.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
