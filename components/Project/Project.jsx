import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = [
  {
    order: true,
    img: "assets/images/pro1.png",
    name: "Tik Tok Clone",
    desc: "Based on one of the major social media sites, I remade my own Tik Tok Clone. Built by modern technology such as REACT, SCSS and utility libraries such as axios, tippyjs,... Please click on the links below for more details.",
    usage: ["React", "SCSS", "Axios"],
    codeLink: "https://github.com/notVinh/Tiktok-clone-REACTJS",
    demoLink: "https://tiktok-clone-reactjs.vercel.app/",
  },
  {
    order: false,
    img: "assets/images/pro2.png",
    name: "Music Player",
    usage: ["HTML", "CSS", "JavaScript"],
    desc: "Music Player is a simple application for listening to music, this was the first project when I started learning about Front End and Web Development",
    codeLink: "https://github.com/notVinh/MusicPlayer",
    demoLink: "https://celebrated-concha-5147c8.netlify.app/",
  },
  {
    order: true,
    img: "assets/images/pro3.png",
    name: "AI Prompt",
    usage: ["NextJS", "TailwindCSS", "MongoDB"],
    desc: "AI Prompt is a project used to help users copy and use a content that the user adds, it is like a dictionary with everything you want to search but first you have to teach it.",
    codeLink: "https://github.com/notVinh/NextJS-Prompt",
    demoLink: "https://next-js-prompt-nine.vercel.app/",
  },
];

const Project = () => {
  return (
    <div
      id="Project"
      className="flex flex-col m-auto xl:pt-36 pt-16 xl:mx-0 mx-10 justify-center items-center min-h-sectionHeight"
    >
      <h1 className="font-extrabold xl:text-6xl text-3xl  text-textColor mb-7">
        My
        <span className="text-primaryColor"> Project</span>
      </h1>
      <div className="xl:text-2xl text_1xl text-textColor font-bold mb-7 text-center">
        Each Project is a unique piece of development
      </div>
      <ul className="flex flex-col xl:pt-20 pt-7 xl:mx-24">
        {Projects.map((project) => (
          <ProjectCard
            order={project.order}
            img={project.img}
            name={project.name}
            desc={project.desc}
            usage={project.usage}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Project;
