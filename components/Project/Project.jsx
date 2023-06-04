import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = [
  {
    img: "assets/images/pro1.png",
    name: "Tik Tok Clone",
    desc: "Based on one of the major social media sites, I remade my own Tik Tok Clone. Built by modern technology such as REACT, SCSS and utility libraries such as axios, tippyjs,... Please click on the links below for more details.",
    codeLink: "https://github.com/notVinh/Tiktok-clone-REACTJS",
    demoLink: "https://tiktok-clone-reactjs.vercel.app/",
  },
];

const Project = () => {
  return (
    <div
      id="Project"
      className="flex flex-col m-auto xl:pt-36 pt-16 justify-center items-center min-h-sectionHeight"
    >
      <h1 className="font-extrabold xl:text-6xl text-3xl  text-textColor mb-7">
        My
        <span className="text-primaryColor"> Project</span>
      </h1>
      <div className="xl:text-2xl text_1xl text-textColor font-bold mb-7 text-center">
        Each Project is a unique piece of development
      </div>
      <ul className="flex xl:pt-20 pt-7 xl:mx-24">
        {Projects.map((project) => (
          <ProjectCard
            img={project.img}
            name={project.name}
            desc={project.desc}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Project;
