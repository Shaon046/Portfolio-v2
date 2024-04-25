import React from "react";
import Image from "next/image";
import Logo from "./utilities/Logo";

const Navbar = ({ scrollToLayer }) => {
  return (
    <nav className="flex h-18 w-2/2 bg-primary-blue p-2">
      {/* Left container */}
      <div className="flex px-8 align-middle w-1/2">
        {/* <Image src="/logo.png" alt="Logo" height={60} width={116}  /> */}
        <Logo />
      </div>

      {/* Right Container */}
      <div className="flex px-8 justify-end items-center  w-1/2">
        <ul className="flex space-x-4 xs:text-sm sm-text-sm md:text-xl text-primary-yellow">
          <li className=" cursor-pointer " onClick={() => scrollToLayer(1)}>
            About
          </li>
          <li className=" cursor-pointer " onClick={() => scrollToLayer(3)}>
            Projects
          </li>
          <li className=" cursor-pointer " onClick={() => scrollToLayer(4)}>
            Services
          </li>
          <li className=" cursor-pointer " onClick={() => scrollToLayer(6)}>
            Contacts
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
