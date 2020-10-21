import React from 'react';
import { Link } from "react-router-dom";

function Folders(){
    const folderDisplay = () => {
        console.log("i'm clicked"); 
        
    }

    return(
        <div className="" >
            <div class="flex flex-wrap flex-row flex-none  ">
            <div onclick ="folderDisplay()" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-white inline-block bordermain border-gray-800 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-black ml-2 mt-1 "> Project Comet </div>
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-white inline-block  bordermain border-gray-800 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-black ml-2 mt-1">Benchmarking 2020 </div>
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-white inline-block  bordermain border-gray-800 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-black ml-2 mt-1"> Project Nora </div>
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-white inline-block  bordermain border-gray-800 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-black ml-2 mt-1">Satisfaction Survey</div>
        </div>
        </div>
    );
}

export default Folders;  