import React from "react";
import Logo from "../images/logo1.png";
import { LinkData } from "./LinkData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  // Pull links from LinkData.jsx
  const ListLinks = LinkData.map((link) => {
    return (
      <Link to={`${link.href}`} key={link.text}>
        <li className="lg:mr-8 lg:p-0 pr-4 py-2 sm:py-4 text-end font-['Work Sans'] font-medium text-xl sm:text-2xl lg:text-xl tracking-wider">
          {link.text}
        </li>
      </Link>
    );
  });

  return (
    <div className="bg-main flex justify-between items-center text-third flex-wrap">
      <div className="sm:ml-2 sm:mt-2 lg:mt-0 lg:ml-32 flex">
        <img src={Logo} alt="$$$$$" className="hidden lg:block w-[74px] h-20" />
        <span className="font-teko font-bold text-[64px] pl-4 lg:p-0">
          TOSSY
        </span>
      </div>

      {/*Hamburger*/}
      <div className="lg:hidden self-center mb-4" id="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          rounded
          size={30}
        />
      </div>

      {/*Links*/}
      <nav
        className={`${
          isOpen
            ? "h-full opacity-100 scale-100"
            : "h-0 opacity-0 scale-0 lg:opacity-100 lg:scale-100 lg:h-full"
        } lg:flex lg:w-auto block w-full transition-all`}
      >
        <ul className="lg:flex lg:mr-20">{ListLinks}</ul>
      </nav>
    </div>
  );
};

export default Header;
