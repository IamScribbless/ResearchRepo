import React from "react";
import { Link } from "react-router-dom";
import NewProject from "../pages/NewProject";
import ProjectCard from "./ProjectCard";

function Nav() {
  return (
    <div className=" flex-shrink-0 h-screen max-w-sm overflow-hidden shadow-lg bg-white hover:bg-gray-100 w-1/4 ">
      <div className="py-12">
        <p className=" font-sans font-family: Roboto py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
          <Link to="/">Home</Link>
        </p>
        <p className=" py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
          <Link to="/New Project">New Project</Link>
        </p>
      </div>
    </div>
  );
}

export default Nav;
