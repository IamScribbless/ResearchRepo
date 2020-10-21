import React from 'react';
import { Link } from "react-router-dom";

function ProjectFilters(){
    return(
        <div className=" content-center box-border  w-48">
        <div className=" box-border relative w-48 h-max text-center">
            <div class=" rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-white ml-2 mt-1 "> Project Comet </div>
            <div class="bg-gray-700 border border-gray-300 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-white ml-2 mt-1">Benchmarking 2020 </div>
            <div class="bg-gray-700 border border-gray-300 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-white ml-2 mt-1"> Project Nora </div>
            <div class="bg-gray-700 border border-gray-300 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-white ml-2 mt-1">Satisfaction Survey</div>
        </div>
        </div>
        
        
    );
}

export default ProjectFilters;  