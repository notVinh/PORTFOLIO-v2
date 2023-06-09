import React from "react";

const SkillList = ({ src, name }) => {
  return (
    <li className="flex flex-col justify-center items-center xl:m-7 m-5 w-24 h-24">
      <img src={src} alt={name} width={60} />
      <span className="m-3">{name}</span>
    </li>
  );
};

export default SkillList;
