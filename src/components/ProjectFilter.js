import React from "react";
import { Link } from "react-router-dom";

function ProjectFilters() {
  return (
    <div className=" content-center box-border  w-48">
         <section className=" box-border relative w-48 h-max text-left">
        <h3 className=" px-3 mt-6 text-lg font-bold text-black ml-2 mt-1">
          {" "}
          Sort By{" "}
        </h3>
        <p class=" hover:text-black px-3 text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          Most Recent{" "}
        </p>
        <p class="hover:text-black  px-3  text-sm font-semibold text-gray-800 ml-2 mt-1 ">
        Project {" "}
        </p>
        <p class="hover:text-black  px-3   text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          Year{" "}
        </p>
       
      </section>
      <section className=" box-border relative w-48 h-max text-left">
        <h3 className=" px-3 mt-6 text-lg font-bold text-black ml-2 mt-1">
          {" "}
          Method{" "}
        </h3>
        <p class=" hover:text-black px-3 text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          Survey{" "}
        </p>
        <p class="hover:text-black px-3 text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          Usability Test{" "}
        </p>
        <p class="hover:text-black  px-3   text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          User-Interview{" "}
        </p>
        <p class="hover:text-black  px-3  text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          Focus Group
        </p>
      </section>


      <section className=" box-border relative w-48 h-max text-left">
        <h3 className=" px-3 mt-6 text-lg font-bold text-black ml-2 mt-1">
          {" "}
          Insight Type {" "}
        </h3>
        <p class=" hover:text-black px-3 text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          Persona{" "}
        </p>
        <p class="hover:text-black  px-3  text-sm font-semibold text-gray-800 ml-2 mt-1 ">
        User Journey Map {" "}
        </p>
        <p class="hover:text-black  px-3   text-sm font-semibold text-gray-800 ml-2 mt-1 ">
          {" "}
          Benchamrking Scorecard {" "}
        </p>
       
      </section>
    </div>
  );
}

export default ProjectFilters;
