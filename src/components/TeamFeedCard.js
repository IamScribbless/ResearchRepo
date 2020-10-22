import React from "react";
import { Link } from "react-router-dom";

function TeamFeedCard({ title, date, description, team, id }) {
  return (
      <div className=" flex bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-indigo-800 m-2" >
        <div className="p-2 mb-1  ">
          <p className="font-semibold text-sm tracking-tight text-black ">
           Stephan Added a New Project
          </p>
          <p className="text-gray-500 text-sm"> Today </p>
    
          <section className="flex flex-row my-2">
            <img
              className="w-10 h-10 rounded-full mr-4 border-solid border-4"
              src="https://pbs.twimg.com/profile_images/1248780370180538370/Ud6V-M1D_400x400.jpg "
              alt="Avatar"
            />
            <p className="text-gray-500 text-base my-2">{team} </p>
          </section>
          </div>
          </div>
         
        

  );
}

export default TeamFeedCard;
