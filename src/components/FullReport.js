import React from "react";

function FullReport({title, date, description, team}){
  return (
    <div className="container mx-auto my-6 ">
    <div className=" flex flex-col">
    <div>
      <p className="font-extrabold text-3xl">Project Title </p>
    </div>

    <div className="m-4">
      <p className="font-semibold text-xl"> Background </p> 
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>
    <div className="m-4">
      <p className="font-semibold text-xl"> Summary of Insights </p> 
      <ul className="list-disc ">
        <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </li>
        <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </li>
        <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </li>
        </ul>
    </div>
    <div className="m-4">
    <h3 className=" font-semibold text-xl ">Data, Graphs, & Artifacts</h3>
    <div class="flex flex-row">
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">3</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">4</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">5</div>
</div>
</div>

    <div className="m-4">
      <p className="font-semibold text-xl"> Project Team </p> 
      <ul>
        <li className="text-gray-500">
        Stephan Kotin
        </li>
        <li className="text-gray-500">
        Shanna Licouris
        </li>
       
        </ul>
    </div>

    <div className="m-4">
      <p className="font-semibold text-xl"> Links </p> 
      <ul>
        <li className="text-blue-500">
        Link to full report
        </li>
        <li className="text-blue-500">
        Link to data set
        </li>
        <li className="text-blue-500">
        Link to video recordings
        </li>
       
        </ul>
    </div>
    </div>
    </div>
  );
}

export default FullReport;
