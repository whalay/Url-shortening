import React from "react";

const UrlList = ({ shortLink, inputText }) => {
  return (
    <div>
      <ul className="bg-white flex justify-between items-center p-3 m-2 text-lg font-semibold">
        <li>{shortLink.original_link}</li>
        <span className="flex items-center space-x-4">
       
          <li className="text-Cyan">{shortLink.full_short_link}</li>
          <button className="bg-Cyan px-5 py-2 font-semi-bold text-xl text-white hover:cursor active:bg-Very_Dark_Violet">
            Copy
          </button>
        </span>
      </ul>
    </div>
  );
};

export default UrlList;
