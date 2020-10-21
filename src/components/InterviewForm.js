import React from 'react'; 

function InterviewForm(){
    return(
        <div className=" flex flex-col my-10 mx-24">
        <div className="container mx-auto mt-4" >
        <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
  
        <div className=" font-bold text-gray-700 text-sm mb-2 ">
          <label htmlFor="task1"> intro to research</label>
          <input
            id="task1"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="task #1"
            // onChange={}
            // value={}
          />
        </div>
        </div>
        </div>
        </div>
    );
}

export default InterviewForm; 