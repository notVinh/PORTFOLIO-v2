import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center">
      <div className="flex justify-center items-center xl:pr-7 pr-0">
        <div className="overflow-hidden ">
          <img
            className="xl:h-72 h-44"
            src="assets\images\project1.png"
            alt=""
          />
        </div>
      </div>
      <div className="xl:w-6/12 w-full  flex flex-col justify-center items-center p-7 xl:p-0">
        <h1 className="xl:text-3xl text-2xl text-primaryColor font-bold mb-7">
          About me
        </h1>
        <p className="mb-6 leading-relaxed text-3-xl xl:text-left text-center">
          As a Front-End Developer. I possess an impressive arsenal of skills in
          HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
          and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques, I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
        <div className="flex justify-center items-center">
          <div className="flex font-semibold text-1xl">
            <button className="flex justify-center items-center mr-10">
              Code
              <span className="pl-2">
                <BsGithub />
              </span>
            </button>
            <button
              className="flex justify-center items-center "
              target="_blank"
            >
              Demo
              <span className="pl-2">
                <IoOpenOutline />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
