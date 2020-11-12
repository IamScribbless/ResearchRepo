import React from "react"; 
import { Link } from "react-router-dom";

function InsightCard({title, date, description, keyinsight1, keyinsight2, keyinsight3, id, Q1, Q2, Q3}){
    return(
        <div className=" flex justify-self-auto items-baseline bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-gray-100">
            <div className="p-4 mb-1  ">
          <h3 className="font-semibold text-xl tracking-tight text-black ">
            {" "}
            {keyinsight1}{" "}
          </h3>

        </div>
        <div className=" flex justify-self-auto items-baseline bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-gray-100">
            <div className="p-4 mb-1  ">
          <h3 className="font-semibold text-xl tracking-tight text-black ">
            {" "}
            {keyinsight2}{" "}
          </h3>

        </div>
        <div className=" flex justify-self-auto items-baseline bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 border-gray-100">
            <div className="p-4 mb-1  ">
          <h3 className="font-semibold text-xl tracking-tight text-black ">
            {" "}
            {keyinsight3}{" "}
          </h3>

        </div>
        </div>
        </div>
        </div>
    )
}

export default InsightCard; 

