import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button"; 


function Flow(){
    return(
        <div classname="container mx-auto flex flex-col">  
        <div class= "flex flex-row ml-12 ">
         <label htmlFor="StudyName" className="font-extrabold text-3xl mt-12 "> Project Name </label>
         <div className=" flex flex-row mt-12">
        <div>
         <Button>
             share
         </Button>
         </div>
        <div classname="mt-12">
        <Button color='red'>
             delete
        </Button>
        </div>
        </div>
        </div>

            <div class="flex flex-wrap flex-row flex-none mt-6 ml-12 ">
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg "> Research Plan</div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg">Study Screener </div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg">Study Recruitment </div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg">Data collection</div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg">Data Analysis</div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg">Report</div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg"> Archive</div>
            <div class="text-gray-700 text-center text-sm rounded-md px-8 py-8 m-2 border-4 radius:md border-logo-100 bg-white hover:bg-gray-100 shadow-lg"> Share</div>
     
        </div>
        </div>
        




        
    );

}

export default Flow; 