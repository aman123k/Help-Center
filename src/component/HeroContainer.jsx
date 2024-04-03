import React from "react";
import { IoSearchOutline } from "react-icons/io5";

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
    </section>
  );
}

export default HeroContainer;
