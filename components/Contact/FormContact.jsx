"use client";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const FormContact = () => {
  const [contact, setContact] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  const { values } = contact;

  const handleChange = ({ target }) =>
    setContact((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = async () => {
    setContact((prev) => ({
      ...prev,
      values: {
        ...prev.values,
      },
    }));
    setIsLoading(true);
  };
  return (
    <div className="flex flex-col items-center justify-between xl:w-11/12 w-full caret-primaryColor">
      <div className="w-full flex xl:flex-row flex-col justify-around m-4 items-center">
        <input
          className="xl:w-5/12 w-11/12 bg-formbgColor outline-none rounded-full px-7 py-4 xl:mb-0 mb-8 "
          type="text"
          placeholder="Your name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          className="xl:w-5/12 w-11/12 bg-formbgColor outline-none rounded-full px-7 py-4 "
          type="email"
          placeholder="Your email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <input
        className="w-11/12  bg-formbgColor outline-none rounded-full px-7 py-4 m-4"
        type="text"
        placeholder="Enter subject"
        name="subject"
        value={values.subject}
        onChange={handleChange}
      />
      <textarea
        className="w-11/12  bg-formbgColor outline-none rounded-3xl px-7 pt-4 pb-11 m-4 h-36"
        type="text"
        placeholder="Message here..."
        name="message"
        value={values.message}
        onChange={handleChange}
      />
      <>
        <button
          className="flex items-center justify-center rounded-lg text-2xl bg-textColor text-white py-1 px-2 hover:bg-primaryColor hover:scale-90"
          onClick={handleSubmit}
        >
          {!isLoading ? (
            "Send"
          ) : (
            <>
              <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-3" />
              <span>Processing...</span>
            </>
          )}
        </button>
      </>
    </div>
  );
};

export default FormContact;
