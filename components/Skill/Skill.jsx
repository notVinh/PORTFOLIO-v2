import React from "react";
import SkillList from "./SkillList";

const Skill = () => {
  return (
    <div
      id="Skill"
      className="flex flex-col m-auto xl:pt-36 pt-16 justify-center items-center min-h-sectionHeight"
    >
      <h1 className="font-extrabold xl:text-6xl text-3xl text-textColor  mb-7">
        My
        <span className="text-primaryColor"> Skill</span>
      </h1>
      <ul className="flex flex-wrap justify-center">
        <SkillList src={"assets/images/hmtl.png"} name={"HTML"} />
        <SkillList src={"assets/images/css.png"} name={"CSS"} />
        <SkillList src={"assets/images/js.png"} name={"JavaScript"} />
        <SkillList src={"assets/images/physics.png"} name={"React"} />
        <SkillList src={"assets/images/tailwindcss.png"} name={"Tailwindcss"} />
        <SkillList src={"assets/images/sass.png"} name={"SASS"} />
        <SkillList src={"assets/images/typescript.png"} name={"TypeScript"} />
      </ul>
    </div>
  );
};

export default Skill;
