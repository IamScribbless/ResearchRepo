import React from "react";
import {Link} from "react-router-dom";

function NullProjectState(){
    return(
        <div className=" Container">
        <div className="flex justify-self-auto items-baseline bg-white hover:bg-gray-200 rounded-lg shadow-lg h-1/2  ">
        <div className="p-4 mb-1  ">
        <Link to="/New Project">
          <h3 className="font-semibold text-xl tracking-tight text-black ">
         You Don't Have Any Projects Yet
          </h3>
          <p className=""> You can create a new study to add to your library by clicking on this card</p>
         
          </Link>

          
        </div>

        
      </div>
      </div>
        );
}

export default NullProjectState; 