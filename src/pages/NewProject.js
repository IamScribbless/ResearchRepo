import React from "react";

function NewProject() {
  return (
    <div className="container">
      <div className="font-bold text-gray-700 text-sm mb-2">
        <p> Project Name</p>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_name"
          placeholder="Name Of Project"
        ></input>
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <p> Project Description</p>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_description"
          placeholder="Description Of Project"
        ></input>
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <p> Project Team</p>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_team"
          placeholder="Who worked on this project? "
        ></input>
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <p> Summary of Insights</p>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_team"
          placeholder="What are the top two-three learning from the research? "
        ></input>
      </div>
    </div>
  );
}

export default NewProject;
