import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, date, description, team, id }) {
  return (
    <Link to={`FullReports/${id}`}>
      <div className=" flex justify-self-auto items-baseline bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-gray-100  "
      >
        <div className="p-4 mb-1  ">
          <h3 className="font-semibold text-xl tracking-tight text-black ">
            {" "}
            {title}{" "}
          </h3>
          <p className="text-gray-500 text-sm"> {date} </p>
          <div className="text-gray-600 text-base ">
            {/* Still need to figure out character limit and CSS for text inside cards */}
            <p> {description} </p>
          </div>
          <div className="flex flex-row my-2">
            <img
              className="w-10 h-10 rounded-full mr-4 border-solid border-4"
              src="https://pbs.twimg.com/profile_images/1248780370180538370/Ud6V-M1D_400x400.jpg "
              alt="Avatar"
            />
            <p className="text-gray-500 text-base my-2">{team} </p>
          </div>
         
              <Link to="/ShareUI">
                <button className=" bg-gray-700 border border-gray-300 rounded-full px-3 py-2 my-1 text-sm font-semibold text-white ml-1 mt-3 items-right">
                  {" "}
                  Share{" "}
                </button>
              </Link>
            </div>
          </div>
        

    </Link>
  );
}

export default ProjectCard;
