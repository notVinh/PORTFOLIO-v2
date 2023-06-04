import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ img, name, desc, codeLink, demoLink }) => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center">
      <div className="flex justify-center items-center xl:pr-7 pr-0">
        <div className="overflow-hidden ">
          <img className="xl:h-72 h-44" src={img} alt="" />
        </div>
      </div>
      <div className="xl:w-6/12 w-full  flex flex-col justify-center items-center p-7 xl:p-0">
        <h1 className="xl:text-3xl text-2xl text-primaryColor font-bold mb-7">
          {name}
        </h1>
        <p className="mb-6 leading-relaxed text-3-xl xl:text-left text-center">
          {desc}
        </p>
        <div className="flex justify-center items-center">
          <div className="flex font-semibold text-1xl">
            <a
              href={codeLink}
              className="flex justify-center items-center mr-10"
            >
              Code
              <span className="pl-2">
                <BsGithub />
              </span>
            </a>
            <a
              href={demoLink}
              className="flex justify-center items-center "
              target="_blank"
            >
              Demo
              <span className="pl-2">
                <IoOpenOutline />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
