import React from "react"; 
import SearchBar from "../components/SearchBar";
import {Link} from "react-router-dom";
import BackButton from "../components/BackButton";




function Tools() {
    return (  
        <div className="container mx-auto mt-12" >
          <BackButton /> <br />
          <label htmlFor="StudyName" className="font-extrabold text-3xl"> Research Tools </label>
      <hr />
      <br />   
      <br />
        <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Link to="/TaskList" >
  <div className=" rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
 
    <div className="font-bold text-xl mb-2">
     Build a Usability Test
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  </Link>


  <div className=" rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Create a Persona
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
    

  <Link to="/InterviewForm" >

  <div className=" rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">
     Conduct User interviews
    </div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  </Link>
  

</div>
</div>   


    );
  }
  
  
  export default Tools;


