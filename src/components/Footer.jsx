import React from "react";
import logo from "../assets/images/logo.svg";

import { GrFacebook } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black h-full p-20">
      <div className=" flex flex-col md:flex-row md:items-start gap-10 items-center  justify-between">
        <div className="flex-initialg">
          <img src={logo} alt="" className="w-72" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white py-5 md:p-0">Features</h1>
          <ul className="text-lg text-white/70">
            <li className="py-3">Link Shortening</li>
            <li className="py-3">Branded Links</li>
            <li className="py-3">Analytics</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white py-5 md:p-0">Resources</h1>
          <ul className="text-lg text-white/70">
            <li className="py-3">Blog</li>
            <li className="py-3">Developers</li>
            <li className="py-3">Support</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white py-5 md:p-0">Company</h1>
          <ul className="text-lg text-white/70">
            <li className="py-3">About</li>
            <li className="py-3">Our Team</li>
            <li className="py-3">Careers</li>
            <li className="py-3">Contact</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <GrFacebook className="text-white"/>
          <FiInstagram className="text-white"/>
          <FiTwitter className="text-white"/>
          <AiOutlineFacebook className="text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
