import React from "react";
import Button from "./Button";

const Intro = () => {
  return (
    <div
      id="Home"
      className="flex flex-col xl:flex-row xl:mx-24 mx-10 xl:pt-36 pt-3 justify-around min-h-sectionHeight"
    >
      <div className="xl:w-6/12 w-full flex flex-col justify-center order-1 ">
        <h2 className="xl:text-4xl text-2xl mb-5 font-bold text-textColor xl:text-left text-center">
          Hi, I'm <br></br>
          <span className="text-primaryColor xl:text-6xl text-4xl">
            Quang Vinh
          </span>
        </h2>

        <h3 className="xl:text-4xl text-2xl mb-2 font-bold text-textColor xl:text-left text-center">
          Web Developer
        </h3>
        <p className="mb-10 xl:text-left text-center">
          My aim is to get the job done accurately and quickly, so if you want
          me to work for you, don't hesitate to contact me!
        </p>
        <div className="flex justify-center items-center">
          <Button
            href={
              "https://drive.google.com/file/d/1FRLld8r29O2TolOPWG6heuY7neY4pQV3/view?usp=sharing"
            }
          >
            Download CV
          </Button>
          <Button href="tel:0395875913">Hire Me</Button>
        </div>
      </div>
      <div className="flex justify-center items-center pb-1 xl:pb-0">
        <div className="xl:w-96 xl:h-96 w-48 h-48 overflow-hidden rounded-full border-textColor border xl:border-none">
          <img className="" src="assets\images\model.png" alt="" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
