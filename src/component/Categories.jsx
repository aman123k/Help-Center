import React from "react";
import CategorieData from "../data/Categoriesdata";

function Categories() {
  return (
    <section className=" px-10">
      <h1 className=" text-center max-[650px]:text-xl font-bold text-3xl text-[#333333]">
        Categories
      </h1>
      <div className=" grid grid-cols-3 gap-6 max-[650px]:grid-cols-1 my-8">
        {CategorieData.map((categorie, index) => {
          return (
            <div key={index} className=" border text-center pt-3 rounded-lg">
              <img
                src={categorie.image}
                className=" h-1/2 ml-[50%] max-[650px]:h-[40%] translate-x-[-50%]"
                alt=""
              />
              <h3 className=" my-2.5 max-[650px]:text-base font-extrabold text-lg">
                {categorie.title}
              </h3>
              <p className=" px-6 text-[#484848] text-sm">
                {categorie.discription}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
