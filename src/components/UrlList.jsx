import React, { useState } from "react";

const UrlList = ({ shortLink }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <ul className="bg-white md:flex justify-between items-center p-3 m-2  text-lg font-semibold">
        <li>{shortLink.original_link}</li>
        <span className=" md:flex gap-5 items-center block  ">
          <li className="text-Cyan py-3 ">{shortLink.full_short_link}</li>
          <button
            onClick={() => {
              navigator.clipboard.writeText(shortLink.short_link);
              setIsClicked(true);
              setTimeout(() => {
                setIsClicked(false);
              }, 5000);
            }}
            className={`w-full  px-10 py-2 font-semi-bold text-xl text-white hover:cursor active:bg-Very_Dark_Violet ${isClicked ? "bg-Dark_Violet" : "bg-Cyan" }`}
          >
            {isClicked ? "copied" : "copy"}
          </button>
        </span>
      </ul>
    </div>
  );
};

export default UrlList;
