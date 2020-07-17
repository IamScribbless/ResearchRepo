import React from "react";
import Tag from "./Tag";

const tags = [
  {
    name: "tag1",
  },
  {
    name: "tag2",
  },
  {
    name: "tag3",
  },
];

function ProjectCard({ title, date, description, team, Tag }) {
  return (
  
    
    <div className=" 4  bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-indigo-300 mb-3 ">
      <div className="p-2">
        <h3 className="font-semibold text-xl tracking-tight ml-1 text-gray-800 "> {title} </h3>
        <p className="text-gray-600 text-sm"> {date} </p>
        <div className="text-gray-600 text-base my-2 ">
          <p> {description} </p>
          <p className="text-gray-500 text-base my-2">
             {team} </p>
            
    
        </div>
      </div>
    </div>
  

 
  

);
}

 

export default ProjectCard;
