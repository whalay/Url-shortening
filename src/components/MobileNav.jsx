import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = (props) => {
  return (
    <div className="bg-Dark_Violet  absolute w-screen   m-auto">
      <div className="    md:hidden   ">
        <div className=" relative text-center text-white font-bold text-2xl py-10">
          <div className="absolute right-10 top-10">
            {" "}
            <AiOutlineClose onClick={props.navHandler} className="" />
          </div>
          <p className="py-2">Features</p>
          <p className="py-2">Pricing</p>
          <p className="py-2">Resources</p>

          <div className="pt-10">
            <p className="py-2">Login</p>
            <p className="py-2">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
