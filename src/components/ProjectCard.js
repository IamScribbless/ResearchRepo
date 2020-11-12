import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, date, description, team, id }) {
  return (
    <Link to={`FullReports/${id}`}>
      <div className=" Container">
        <div className="flex justify-self-auto items-baseline bg-white hover:bg-gray-200 rounded-lg shadow-lg  ">
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
              <div>
              <img
                className="w-10 h-10 rounded-full mr-4 border-solid border-4"
                src="https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/97809761_10156816919551230_5948956109313146880_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=DjxJi_u_sdMAX-BJ6-x&_nc_ht=scontent.faus1-1.fna&oh=76e15aa74e143718278b8db927702601&oe=5FD1C837"
                alt="Avatar"
              />
           </div>
           
              <div>
              <Link to="/ShareUI">
                  <button className=" bg-gray-700 border border-gray-300 rounded-full px-3 py-2 my-1 text-sm font-semibold text-white  mt-1 items-right">
                    {" "}
                    Share{" "}
                  </button>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
    
    </Link>
  );
}

export default ProjectCard;
