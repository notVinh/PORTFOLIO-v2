import React from "react";
import ListItem from "./ListItem";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdContactEmergency } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="bg-white fixed z-10 top-0 left-0 px-32 pt-3 w-full  xl:flex justify-between items-center text-textColor hidden">
        <div className="text-4xl font-bold hover:cursor-pointer text-primaryColor">
          <a href="#Home">VINH</a>
        </div>
      </div>
      <div className="bg-white fixed z-10 bottom-0 right-0 flex flex-row w-full justify-between items-right text-textColor xl:h-full xl:flex-col xl:w-0">
        <div className="hidden text-right text-3xl hover:text-primaryColor hover:cursor-pointer">
          EN
        </div>
        <div className="flex items-end justify-center w-full xl:h-full xl:flex-col">
          <ListItem id={"Home"}>
            <AiFillHome />
          </ListItem>
          <ListItem id={"About"}>
            <FaUserAlt />
          </ListItem>
          <ListItem id={"Skill"}>
            <GiSkills />
          </ListItem>
          <ListItem id={"Project"}>
            <BsPersonWorkspace />
          </ListItem>
          <ListItem id={"Contact"}>
            <MdContactEmergency />
          </ListItem>
        </div>
      </div>
      {/* <div className="bg-white fixed z-10 bottom-0 right-0 pr-6 pt-3  h-full flex flex-col justify-between items-right text-textColor">
        <div className="text-right text-3xl hover:text-primaryColor hover:cursor-pointer">
          EN
        </div>
        <ul className="flex flex-col items-end justify-center h-full">
          <ListItem id={"Home"}>
            <AiFillHome />
          </ListItem>
          <ListItem id={"About"}>
            <FaUserAlt />
          </ListItem>
          <ListItem id={"Skill"}>
            <GiSkills />
          </ListItem>
          <ListItem id={"Project"}>
            <BsPersonWorkspace />
          </ListItem>
          <ListItem id={"Contact"}>
            <MdContactEmergency />
          </ListItem>
        </ul>
      </div> */}
    </>
  );
};

export default Header;
