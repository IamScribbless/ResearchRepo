import React from "react"; 
import SearchBar from "../components/SearchBar";
import {Link} from "react-router-dom";
import BackButton from "../components/BackButton";

function NewStudy() {
    return (  
        <div className="container mx-auto" >
          <label htmlFor="StudyName" className="font-extrabold text-3xl "> New Study </label>
      <hr />
      <br />   
      <br />
        <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
  <Link to="/New Project" >
  <div className=" rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Add A Completed Study
    </div>
    <p className="text-gray-700 text-base">
   Add a study to your library, tag it, and make it sharable. Here you can upload presentation slides link to external drives or documents.</p>
  </div>
  </div>
  </Link>

  <Link to="/Tools" >
  <div className=" rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Create a Study From Scratch
    </div>
    <p className="text-gray-700 text-base">
      Use our tools to create a new study from scratch. Design a usability study, create a script for user interviews, or develop customer journey maps.
    </p>
  </div>
  </div>
  </Link>
  

</div>
</div>   


    );
  }
  
  
  export default NewStudy;


