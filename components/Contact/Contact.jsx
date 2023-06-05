import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  BsTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col mx-10 xl:pt-36 pt-16 justify-around items-center min-h-sectionHeight"
    >
      <h1 className="font-extrabold xl:text-6xl text-3xl text-textColor xl:pb-14 pb-1">
        Contact <span className="text-primaryColor">Me</span>
      </h1>
      <div className="flex xl:flex-row flex-col text-textColor">
        <div className="">
          {/* <h1 className="xl:text-3xl text-1xl font-bold xl:text-left text-center hidden xl:block">
            Contact Me Here
          </h1> */}
          <h2 className="pt-7 xl:text-left text-center font-semibold">
            If you want to contact me, please click on the links below.
          </h2>
          <div className="flex items-center xl:flex-row flex-col pt-5 hover:text-primaryColor m-2">
            <IoLocationSharp />
            <span className="ml-2">
              <a href="https://goo.gl/maps/q6UXrssbes8gXzcr6?coh=178572&entry=tt">
                Hồ Chí Minh, Việt Nam
              </a>
            </span>
          </div>
          <div className="flex items-center xl:flex-row flex-col pt-3 hover:text-primaryColor m-2">
            <MdEmail />
            <span className="ml-2">
              <a href="mailto:dqv4work@gmail.com">dqv4work@gmail.com</a>
            </span>
          </div>
          <div className="flex items-center xl:flex-row flex-col pt-3 hover:text-primaryColor m-2">
            <BsTelephoneFill />
            <span className="ml-2">
              <a href="tel:0395875913">0395875913</a>
            </span>
          </div>
          <div className=" w-full flex xl:justify-between justify-evenly items-center xl:pt-5 p-4">
            <a
              href="https://www.facebook.com/dqv166"
              className="hover:text-primaryColor"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/nashiesobadly/"
              className="hover:text-primaryColor"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/notVinh"
              className="hover:text-primaryColor"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vinh-quang-1a5161240/"
              className="hover:text-primaryColor"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <h1 className="pt-7 xl:text-left text-center font-semibold xl:hidden">
          Or you have any ideas please send this form to me
        </h1>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
