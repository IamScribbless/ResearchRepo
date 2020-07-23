import React from "react";
import { Link } from "react-router-dom";


function ProjectCard({ title, date, description, team }) {
  return (
  
    <Link to="/FullReports" >
    <div className=" flex items-center
     bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-indigo-300  ">
      <div className="p-4">
        <h3 className="font-semibold text-xl tracking-tight text-indigo-500 "> {title} </h3>
        <p className="text-gray-500 text-sm"> {date} </p>
        <div className="text-gray-600 text-base mb-2 ">
        {/* Still need to figure out character limit and CSS for text inside cards */}
          <p> {description} </p>
          <p className="text-gray-500 text-base my-2">
             {team} </p>
        
             <div className=" py-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Usability</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#United States</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Q1-2020</span>
  </div></div>
      </div>
      
    </div>
  
    </Link>
 
  

);
}

 

export default ProjectCard;
