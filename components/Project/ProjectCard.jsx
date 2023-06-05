import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

const ProjectCard = ({ order, img, name, desc, usage, codeLink, demoLink }) => {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center p-9 border-b-2">
      {order ? (
        <div className="flex xl:w-6/12 justify-center items-center xl:p-5 pr-0 order-0">
          <div className="overflow-hidden ">
            <img className="xl:h-72 h-44" src={img} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex xl:w-6/12 justify-center items-center xl:p-5  pr-0 xl:order-1 order-0">
          <div className="overflow-hidden ">
            <img className="xl:h-72 h-44" src={img} alt="" />
          </div>
        </div>
      )}
      <div className="xl:w-6/12 w-full  flex flex-col justify-center items-center p-7 xl:p-0">
        <h1 className="xl:text-3xl text-2xl text-primaryColor font-bold mb-7">
          {name}
        </h1>
        <p className="mb-6 leading-relaxed text-3-xl xl:text-left text-center">
          {desc}
        </p>
        <div className="flex justify-center items-center pb-9">
          {usage.map((item) => (
            <div className="flex font-bold text-1xl xl:mx-5 mx-3">{item}</div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="flex font-medium text-1xl">
            <a
              href={codeLink}
              className="flex justify-center items-center xl:mx-5 mx-3"
            >
              Code
              <span className="p-2">
                <BsGithub />
              </span>
            </a>
            <a
              href={demoLink}
              className="flex justify-center items-center xl:mx-5 mx-3"
              target="_blank"
            >
              Demo
              <span className="p-2">
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
