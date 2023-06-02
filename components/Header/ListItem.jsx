"use client";
import React from "react";
import { useState } from "react";

const ListItem = ({ id, children }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {};
  return (
    <button
      className="flex justify-end items-center hover:cursor-pointer hover:text-primaryColor rounded-full m-4 "
      onClick={handleActive}
    >
      {/* <a className="hidden text-2xl group-hover:block" href={`#${id}`}>
        {id}
      </a> */}
      <a className="" href={`#${id}`}>
        <span className="text-2xl">{children}</span>
      </a>
    </button>
  );
};

export default ListItem;
