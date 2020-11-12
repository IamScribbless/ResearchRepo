import React from "react";
import { Link } from "react-router-dom";
import Feedback from "../components/Feedback";
import Flow from "../components/Flow";
function TopNav() {
  return (
    <nav className="navbackground sticky flex flex-row flex-wrap p-3">
      <div className=" flex-grow lg:flex lg:items-center lg:w-auto">
      <Link to="/">
            <span className=" text-logo-100 font-semibold text-xl tracking-tight ml-12  ">
              Research Vault
            </span>
          </Link>
        <div className="flex  text-xl lg:flex-grow lg:pl-8">
          
          <Link
            to="/"
            className=" blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold   mr-4"
          >
           Library
          </Link>
          
          {/* <Link
            to="/Flow"
            className=" blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold   mr-4"
          >
           Projects
          </Link> */}
        
          {/* <Link
            to="/Questions"
            className="blue block mt-4 lg:inline-block lg:mt-0 text-white font-semibold   mr-4"
          >
            Insights
          </Link> */}
          {/* <Link to="/Landing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Landing Page</Link>*/}
          {/* <Link to="/TaskList" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Task List</Link> */}
        </div>
        <div className="flex flex-row-reverse">
          <Feedback />
          <img
            className="w-10 h-10 rounded-full mr-4 border-solid border-4 mt-1"
            src="https://pbs.twimg.com/profile_images/1248780370180538370/Ud6V-M1D_400x400.jpg "
            alt="Avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
