import React from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import mobileHeader from "../images/Header.png";
import { RxCross2 } from "react-icons/rx";

function MobileMenu({ menu, setMenu }) {
  return (
    <section
      className={` bg-white h-screen w-full overscroll-none  max-[850px]:block hidden absolute z-50 ease-in-out 
      duration-500 top-0 left-0 px-4 py-4
       ${menu ? "translate-x-0" : "translate-x-[-100%]"}`}
    >
      <header className=" flex justify-between items-center ">
        <div className=" flex items-center select-none ">
          <img
            src={mobileHeader}
            alt=""
            className=" h-[45px] object-cover max-[650px]:h-[25px]"
          />
          <h1 className=" text-3xl max-[650px]:text-base font-bold border-l-2 border-[#AFAFAF] ml-2 pl-2 py-1 text-[#303030]">
            Help Center
          </h1>
        </div>
        <RxCross2
          className=" text-2xl font-bold"
          onClick={() => setMenu(false)}
        />
      </header>
      <nav
        className=" 
       select-none mt-8"
      >
        <ul className=" flex items-center max-[850px]:flex-col max-[850px]:items-start gap-2 text-[#343434]">
          <li className=" flex items-center gap-3 font-semibold cursor-pointer hover:bg-[#EFEFEF] w-full px-3 py-3 rounded-lg">
            Devlopers <FaUpRightFromSquare />
          </li>
          <li className=" flex items-center gap-3 font-semibold cursor-pointer hover:bg-[#EFEFEF] w-full px-3 py-3 rounded-lg">
            Report Abuse <FaUpRightFromSquare />
          </li>
          <li className=" cursor-pointer font-semibold hover:bg-[#EFEFEF] w-full px-3 py-3 rounded-lg">
            Contact Us
          </li>

          <li className=" cursor-pointer font-semibold border-l-2 pl-6 max-[850px]:border-none max-[850px]:pl-3 hover:bg-[#EFEFEF] w-full px-3 py-3 rounded-lg">
            Log In
          </li>
          <li className=" cursor-pointer font-semibold hover:bg-[#EFEFEF] w-full px-3 py-3 rounded-lg">
            Sign Up
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileMenu;
