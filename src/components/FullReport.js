import React from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "./Button";
import { database } from "../firebase";
import { v4 as uuidv4 } from "uuid";



function FullReport({
  title,
  date,
  description,
  team,
  keyinsight1,
  keyinsight2,
  keyinsight3,
  link1,
  link2,
  link3,
  id,
  key,
  method
  
}) {
  const location = useLocation()
  const params = useParams()

  function deleteProject(id) {
    return database.ref("/projects/" + id).remove();
  }
  
  function getProject(id) {
    
  }
 
  return (
    <div>
      <div className="container mx-auto mt-4"></div>
      <div className="container mx-auto my-6 ">
        <div className=" flex flex-col">
          <div className="flex flex-row">
            <p className="font-extrabold text-3xl">{title}</p>
           <Button>
             share
           </Button>
           <Button 
           onClick={() => {
            const confirmed = window.confirm("Are you sure you want to delete the project?");
            if(confirmed){
              deleteProject(params.id);
            }
          }} color='red'>
             delete
           </Button>
          </div>
          <div>
            <p className="text-gray-500 text-sm"> {date} </p>
          </div>
          <div className="m-4">
            <p className="font-semibold text-xl"> Study Background </p>
            <p className="">{description} </p>
          </div>
          <div className="ml-4 my-2">
            <p className="font-semibold text-xl"> Method </p>
            <p>{method}</p>
          </div>
          <div className="m-4">
            <p className="font-semibold text-xl"> Summary of Insights </p>
            <ul className=" m-4 list-disc ">
              <li>{keyinsight1}</li>
              <li>{keyinsight2}</li>
              <li>{keyinsight3}</li>
            </ul>
          </div>
          {
            <div className="m-4">
              <h3 className=" font-semibold text-xl ">Presentation Slides</h3>
              {/* Still need to figure how to pipe in uploads from here */}
              <div class="flex flex-row">
                <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">
                  1
                </div>
                <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">
                  2
                </div>
                <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">
                  3
                </div>
                <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">
                  4
                </div>
                <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">
                  5
                </div>
              </div>
            </div>
          }
          {team && (
            <div className="m-4">
              <p className="font-semibold text-xl"> Team</p>
              <p> {team}</p>
            </div>
          )}

          <div className="m-4">
            <p className="font-semibold text-xl"> Links </p>
            <ul>
              <li className="text-blue-500">{link1}</li>
              <li className="text-blue-500">{link2}</li>
              <li className="text-blue-500">{link3}</li>
            </ul>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}



export default FullReport;
