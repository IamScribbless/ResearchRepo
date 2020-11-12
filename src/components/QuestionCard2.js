import React from "react";
import { Link } from "react-router-dom";

function QuestionCard2({ title, date, id, Q2, keyinsight2 }) {


  return (
    <div className=" Container">
    <div className="flex justify-self-auto items-baseline bg-white hover:bg-gray-200 rounded-lg shadow-lg  ">
    <div className="p-4 mb-1  ">
      <h3 className="font-semibold text-xl tracking-tight text-black ">
     {Q2}
      </h3>
      <p className=" py-1 text-gray-800"> {keyinsight2} </p>
      <p className="py-1 text-gray-500 text-sm"> {title} </p>
      <p className="text-gray-500 text-xs"> {date} </p>

      
    </div>
  </div>
  </div>


  );
}

export default QuestionCard2;
