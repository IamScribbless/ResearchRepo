import React from "react"; 
import SearchBar from "./SearchBar"; 

function FullReport({title, date, description, team, keyinsight1, keyinsight2, keyinsight3, link1, link2, link3, method}){
  return (


    <div>
      <div className = "container mx-auto mt-12">
      
      </div>
      <div className="container mx-auto my-6 ">
    <div className=" flex flex-col">
    <div>
      <p className="font-extrabold text-3xl">{title}</p>
    </div>
    <div className="m-4">
      <p className="font-semibold text-xl"> Study Background  </p> 
      <p className="">{description} </p>
    </div>
    <div>
    <p className="font-semibold text-xl"> Method  </p> 
      <p>
      {method}
      </p>
    </div>
    <div className="m-4">
      <p className="font-semibold text-xl"> Summary of Insights </p> 
      <ul className="list-disc ">
        <li>
        {keyinsight1}
        </li>
        <li>
        {keyinsight2}
        </li>
        <li>
        {keyinsight3}
        </li>
        </ul>
    </div>
    <div className="m-4">
    <h3 className=" font-semibold text-xl ">Presentation Slides</h3>
    {/* Still need to figure how to pipe in uploads from here */}
    <div class="flex flex-row">
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">3</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">4</div>
  <div class="text-gray-700 text-center bg-gray-400 px-20 py-16 m-2">5</div>
</div>
</div>

    <div className="m-4">
      <p className="font-semibold text-xl"> Team</p> 
      <p> {team}</p>
    </div>

    <div className="m-4">
      <p className="font-semibold text-xl"> Links </p> 
      <ul>
        <li className="text-blue-500">
        {link1}
        </li>
        <li className="text-blue-500">
       {link2}
        </li>
        <li className="text-blue-500">
        {link3}
        </li>
       
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
