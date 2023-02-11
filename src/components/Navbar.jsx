import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { name: "Feature", url: "/" },
  { name: "Prices", url: "/" },
  { name: "Resources", url: "/" },
    { name: "Login", url: "/" },
];

const Navbar = () => {
  
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[9999] ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7 relative ">
        <div className="cursor-pointer">
          <img src={logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 text-2xl absolute md:static text-center  md:z-auto z-[-1] left-0 right-0 mx-10   md:w-auto md:pl-0  transition-all duration-500 ease-in cursor-pointer ${
            open ? "top-20 bg-Dark_Violet rounded-xl " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8  md:my-0 my-7 md:mr-5   ">
              <a
                href={link.link}
                className="text-white md:text-black hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-Cyan px-4 py-2  font-semi-bold   text-white rounded-full ">Sign Up</button>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
