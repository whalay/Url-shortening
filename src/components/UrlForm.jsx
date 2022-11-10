import React, { useState } from "react";

const UrlForm = ({inputText, inputHandler, submitHandler, inputIsValid}) => {
 

  return (
    <div className=" absolute -bottom-[250px] md:-bottom-[220px]   z-[9999] w-full">
      <form
        onSubmit={submitHandler}
        className="bg-boostM md:bg-boostD bg-no-repeat bg-Dark_Violet md:mx-20 m-10 p-10  text-center md:flex justify-center items-center flex-wrap md:gap-10 space-y-5"
      >
        <div className="flex-1">
          <input
            onChange={inputHandler}
            value={inputText}
            type="text"
            placeholder="shorten a link here ..."
            className={`flex-1 p-3 rounded-lg outline-none  w-full text-xl   ${
              !inputIsValid ? " border-2 border-red-500" : "border-none"
            }`}
          />
          {!inputIsValid && <p className="text-left text-red-600">Please add a link..</p>}
        </div>
        <button className="bg-Cyan px-9 py-3  font-semi-bold text-xl  text-white  ">
          shorten it!
        </button>
      </form>
    </div>
  );
};

export default UrlForm;
