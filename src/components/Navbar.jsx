import logo from "../assets/images/logo.svg";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import MobileNav from "./MobileNav";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav((showNav) => !showNav);
  };

  return (
    <section className="flex justify-between md:px-20  p-5 items-center">
      <div className="flex gap-10">
        <img src={logo} alt="" />
        <ul className="flex gap-5">
          <li>Features</li>
          <li>Prices</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="flex ">
        <GiHamburgerMenu onClick={navHandler} className="w-10 h-10 md:hidden" />
        <ul className="flex gap-5 items-center">
          <li>Login</li>
          <li className="bg-Cyan px-5 py-3  font-semi-bold   text-white rounded-full ">Sign Up</li>
        </ul>
      </div>

      {showNav && <MobileNav navHandler={navHandler} />}
    </section>
  );
};

export default Navbar;
