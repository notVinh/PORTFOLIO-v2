import React from "react";

const Button = ({ children, href }) => {
  return (
    <a
      className="rounded-lg xl:text-2xl text-1xl mr-3 bg-textColor text-white py-1 px-2 hover:bg-primaryColor hover:scale-90"
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
