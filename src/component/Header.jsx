import React from "react";
import header from "../images/Header.png";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Header = ({ setMenu, menu }) => {
  return (
    <>
      <header className=" flex items-center justify-between font-sans px-10 py-8 max-[650px]:p-4">
        <div className=" flex items-center select-none ">
          <img
            src={header}
            alt=""
            className=" h-[45px] object-cover max-[650px]:h-[25px]"
          />
          <h1 className=" text-2xl max-[650px]:text-base font-bold border-l-2 border-[#AFAFAF] ml-2 pl-2 py-1 text-[#303030]">
            Help Center
          </h1>
        </div>
        <nav className=" select-none max-[850px]:hidden">
          <ul className=" flex items-center  gap-6 text-[#343434]">
            <li className=" flex items-center gap-3 font-semibold cursor-pointer">
              Devlopers <FaUpRightFromSquare />
            </li>
            <li className=" flex items-center gap-3 font-semibold cursor-pointer">
              Report Abuse <FaUpRightFromSquare />
            </li>
            <li className=" cursor-pointer font-semibold">Contact Us</li>

            <li className=" cursor-pointer font-semibold border-l-2 pl-6">
              Log In
            </li>
            <li className=" cursor-pointer font-semibold">Sign Up</li>
          </ul>
        </nav>
        <HiMenuAlt4
          className="hidden max-[850px]:block text-4xl max-[650px]:text-2xl"
          onClick={() => setMenu(true)}
        />

        <MobileMenu menu={menu} setMenu={setMenu} />
      </header>
    </>
  );
};

export default Header;
