import React, { useState } from "react";

function NewProject({ addProject }) {
  // array destructuring
  // 1. the typical way
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  // 2. another way
  // const state = useState("");
  // const [projectName, setProjectName] = state;
  // 3. last way
  //const state = useState("");
  //const projectName = state[0];
  //const setProjectName = state[1];

  const handleSubmit = (event) => {
    // use this to prevent page refresh
    event.preventDefault();
    addProject({
      title: projectName,
      description: projectDescription,
    });
  };

  const handleProjectNameChange = (event) => {
    console.log(event.target.value);
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="project-name"> Project Name</label>
        <input
          id="project-name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Name Of Project"
          onChange={handleProjectNameChange}
          value={projectName}
        />
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Project Description</label>
        <input
          id="project-description"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Description Of Project"
          onChange={handleProjectDescriptionChange}
          value={projectDescription}
        />
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Project Team</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_team"
          placeholder="Who worked on this project? "
        ></input>
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Summary of Insights</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="project_team"
          placeholder="What are the top two-three learning from the research? "
        ></input>
      </div>
      <button disabled={projectName === ""} type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewProject;
