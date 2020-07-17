import React, { useState } from "react";

function NewProject({ addProject }) {
  // array destructuring
  // 1. the typical way
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [projectSummary, setProjectSummary] = useState(""); 

  const handleSubmit = (event) => {
    // use this to prevent page refresh
    event.preventDefault();
    addProject({
      title: projectName,
      description: projectDescription,
      date: projectDate,
      team: projectTeam,
      summary: projectSummary
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

  const handleProjectDateChange = (e) => {
    setProjectDate(e.target.value);
    console.log(e.target.value);
  };

  const handleProjectTeamChange = (e) => {
    setProjectTeam(e.target.value);
    console.log(e.target.value);
  };

  const handleProjectSummaryChange = (e) => {
    setProjectSummary(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto my-6  ">
      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Project Information</h2>
      <p className=" italic text-sm text-gray-500 ">Please be as specific as possible</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
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
        <label > Project Date</label>
        <input
          id="project-date"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Date of Project"
          onChange={handleProjectDateChange}
          value={projectDate}
        />
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Project Background</label>
        <input
          id="project-description"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Provide a description of the Project includeing the project's background"
          onChange={handleProjectDescriptionChange}
          value={projectDescription}
        />
      </div>

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Project Team</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Who worked on this project? "
          onChange={handleProjectTeamChange}
          value={projectTeam}
        ></input>
      </div>
      
      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Summary of insights</h2>
      <p className=" italic text-sm text-gray-500 ">What insights from your research do you want people to walk away with?</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>
      

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>

      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Links</h2>
      <p className=" italic text-sm text-gray-500 ">Provide links for any external data, presentations, recordings, or other assets related to research</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>
      

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleProjectSummaryChange}
          value={projectSummary}
        ></input>
      </div>

      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Upload Presentation Slides </h2>
      <p className=" italic text-sm text-gray-500 ">Please export PowerPoint or Keynote slides to JPGs and uplaod them here</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <button className=" text-white focus:shadow-outline border border-gray-300 bg-gray-400 rounded"> Browse</button>
      </div>
<div className="mt-8">
      <button disabled={projectName === ""} type="submit" className=" text-white focus:shadow-outline border border-gray-300 bg-blue-400 rounded-lg py-2 px-4 block w-full">
        Submit
      </button>
      </div>
    </form>
  );
}

export default NewProject;
