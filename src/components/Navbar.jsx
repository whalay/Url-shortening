import logo from "../assets/images/logo.svg";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import MobileNav from "./MobileNav";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navHandler = () => {
    setShowNav((showNav) => (!showNav));
  };

  return (
    <section className="flex justify-between md:px-20  p-5">
      
      <img src={logo} alt="" />

      <GiHamburgerMenu onClick={navHandler} className="w-10 h-10" />

     {showNav &&  <MobileNav navHandler ={navHandler} />}
    </section>
  );
};

export default Navbar;
