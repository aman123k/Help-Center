import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img2 from "../images/2.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

function HeroContainer() {
  return (
    <section className=" text-center my-16 max-[650px]:my-10">
      <h1 className=" font-bold text-5xl text-[#333333] max-[650px]:text-2xl">
        What can we help you with?
      </h1>
      <form
        action="#"
        className=" translate-x-[-50%] max-[650px]:w-[80%] flex items-center gap-2.5 transform ml-[50%] border-[#EFEFEF] w-[480px] px-4 py-2.5 border 
        backdrop-blur-md my-8 max-[650px]:my-6 bg-white bg-opacity-25 rounded-full"
      >
        <IoSearchOutline className=" text-lg text-[#bfbfbf]" />
        <input
          type="text"
          placeholder="Search our articles "
          class="outline-none bg-transparent w-full"
        />
      </form>
      <ul className="w-max grid grid-cols-2 gap-x-10 max-[650px]:grid-cols-1  ml-[50%] translate-x-[-50%]">
        <li className=" flex items-center  text-[#487DCD] cursor-pointer">
          <img src={img1} alt="" className=" h-12" />
          <span>Setting up your first event</span>
        </li>
        <li className=" flex items-center gap-2 text-[#487DCD] cursor-pointer">
          <img src={img4} alt="" className=" h-14" />
          <span>Troubleshooting availability</span>
        </li>
        <li className=" flex items-center gap-2 text-[#487DCD] cursor-pointer">
          <img src={img2} alt="" className=" h-11" />
          <span>Schedule with video conferencing</span>
        </li>

        <li className=" flex items-center gap-px text-[#487DCD] cursor-pointer">
          <img src={img5} alt="" className=" h-12" />
          <span> Embed options overview</span>
        </li>
        <li className=" flex items-center  gap-2 px-1 text-[#487DCD] cursor-pointer">
          <img src={img3} alt="" className=" h-12" />
          <span>Automate tasks with Workflows</span>
        </li>
        <li className=" flex items-center gap-2 text-[#487DCD] cursor-pointer">
          <img src={img6} alt="" className=" h-12" />
          <span>Using Calendly for Chrome</span>
        </li>
      </ul>
    </section>
  );
}

export default HeroContainer;
