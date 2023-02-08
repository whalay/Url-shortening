import React from "react";
import UrlList from "./UrlList";

const Section = ({ link, inputText, handleCopy, buttonText }) => {
  return (
    <div className="bg-Gray h-full md:p-20 pt-20 p-5   ">

      {link && link.map((shortLink, index) => <UrlList key={index} shortLink={shortLink} handleCopy={handleCopy} buttonText={buttonText}/>)}

      <div className="text-center pt-20">
        <h3 className="text-5xl font-bold">Advanced Statistics</h3>
        <p className="text-xl">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row m-8 gap-5 items-stretch   ">
        <div className="relative self-start bg-white px-5 pt-20  py-10   text-center before:absolute before:bg-brand before:top-[-30px] before:left-[40%] md:before:left-[45%] before:p-11  before:bg-fit  before:bg-Dark_Violet before:rounded-full before:bg-center before:bg-no-repeat  ">
          <h3 className="text-2xl font-bold py-3">Brand Recognition</h3>
          <p className="text-xl font-semi-bold ">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="relative self-center bg-white p-5 pt-20 py-10  text-center before:absolute before:bg-detailed before:top-[-30px] before:left-[40%] before:p-11  before:bg-fit  before:bg-Dark_Violet before:rounded-full before:bg-center before:bg-no-repeat  ">
          <h3 className="text-2xl font-bold py-3">Detailed Records</h3>
          <p className="text-xl font-semi-bold ">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.{" "}
          </p>
        </div>
        <div className="relative self-baseline bg-white p-5 pt-20 py-10  text-center before:absolute before:bg-fully before:top-[-30px] before:left-[40%] before:p-11  before:bg-fit  before:bg-Dark_Violet before:rounded-full before:bg-center before:bg-no-repeat  ">
          <h3 className="text-2xl font-bold py-3"> Fully Customizable</h3>
          <p className="text-xl font-semi-bold ">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
