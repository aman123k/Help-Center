import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import googleImage from "../images/google.png";

import { FaTwitter } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section
        className=" px-10 grid grid-cols-5 max-[1250px]:gap-7 mb-10
      max-[650px]:grid-cols-1 max-[850px]:grid-cols-2  gap-10 items-center"
      >
        <section className=" flex flex-col col-span-2 max-[850px]:col-span-1 gap-5">
          <h1 className="text-[#0C3557] font-extrabold text-4xl">
            Easy <br /> <span className="text-[#0769FB]">ahead</span>
          </h1>
          <p className="text-[#223848] text-base py-5 max-[650px]:py-3">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full border-[#F1F1F1] border appearance-none rounded-lg relative py-2.5 px-3.5 outline-none bg-transparent text-[#223848]"
            >
              <option value="english(us)">English(us)</option>
              <option value="hindi">Hindi</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0C3557]" />
          </div>
          <div>
            <img
              src={googleImage}
              alt=""
              className=" h-12 max-[950px]:h-8 object-cover"
            />
            <div className=" flex gap-3 px-3 items-center py-4">
              <FaTwitter className=" text-xl cursor-pointer" />
              <FaFacebook className=" text-xl cursor-pointer" />
              <FaInstagram className=" text-xl cursor-pointer" />
              <FaLinkedin className=" text-xl cursor-pointer" />
              <FaYoutube className=" text-xl cursor-pointer" />
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-7 max-[650px]:gap-5">
          <h1 className="font-bold text-lg text-[#0C3556]">About</h1>
          <ul className="flex flex-col gap-2.5 text-[#223848] text-[16px]">
            <li>About Calendly</li>
            <li>Contact Sales</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Security</li>
          </ul>
          <div className=" flex flex-col gap-4">
            <h2 className="font-bold text-lg text-[#0C3556]">Support</h2>
            <ul className="flex flex-col gap-2.5 text-[#223848] text-[16px]">
              <li>Help Center</li>
              <li>Video Tutorials</li>
            </ul>
          </div>
        </section>
        <section className=" flex flex-col gap-7 max-[650px]:gap-5">
          <h1 className="font-bold text-lg text-[#0C3557]">Solutions</h1>
          <ul className="flex flex-col gap-2.5 text-[#223848] text-[16px]">
            <li>Customer Success</li>
            <li>Sales</li>
            <li>Recruiting</li>
            <li>Information Technology</li>
            <li>Marketing</li>
          </ul>
          <div className=" flex flex-col gap-4">
            <h2 className="font-bold text-lg text-[#0C3556]">Add-Ons</h2>
            <ul className="flex flex-col gap-2.5 text-[#223848] text-[16px]">
              <li>Download for Chrome</li>
              <li>Download for Firefox</li>
            </ul>
          </div>
        </section>
        <section className=" flex flex-col gap-10 max-[650px]:gap-5">
          <h1 className="font-bold text-lg text-[#0C3557]">Popular Features</h1>
          <ul className="flex flex-col gap-5 max-[650px]:gap-3.5 text-[#223848] text-[16px]">
            <li>Embed Calendly</li>
            <li>Availability</li>
            <li>Sending Notifications</li>
            <li>Using Calendly Mobile</li>
            <li> </li>
          </ul>
          <div className=" flex flex-col gap-8 max-[650px]:gap-4">
            <h2 className="font-bold text-lg text-[#0C3556]">Developers</h2>
            <ul className="flex flex-col gap-2.5 text-[#223848] text-[16px]">
              <li>Developer Tools</li>
              <li></li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
