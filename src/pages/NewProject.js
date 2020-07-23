import React, { useState } from "react";
import FileUpload from "../components/FileUpload";

function NewProject({ addProject }) {
  // array destructuring
  // 1. the typical way
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [projectMethod, setProjectMethod] = useState("");
  const [keyInsight1, setKeyInsight1] = useState("");
  const [keyInsight2, setKeyInsight2] = useState("");
  const [keyInsight3, setKeyInsight3] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");

  const handleSubmit = (event) => {
    // use this to prevent page refresh
    event.preventDefault();
    addProject({
      title: projectName,
      description: projectDescription,
      date: projectDate,
      team: projectTeam,
      method:projectMethod,
      keyinsight1:keyInsight1,
      keyinsight2: keyInsight2,
      keyinsight3: keyInsight3,
      link1:link1,
      link2:link2,
      link3:link3
    });
    setProjectName("");
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

  const handleProjectMethodChange = (e) => {
    setProjectMethod(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyInsight1Change = (e) => {
    setKeyInsight1(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyInsight2Change = (e) => {
    setKeyInsight2(e.target.value);
    console.log(e.target.value);
  };


  const handleKeyInsight3Change = (e) => {
    setKeyInsight3(e.target.value);
    console.log(e.target.value);
  };

  const handleLink1Change = (e) => {
    setLink1(e.target.value);
    console.log(e.target.value);
  };
  
  const handleLink2Change = (e) => {
    setLink2(e.target.value);
    console.log(e.target.value);
  };
  
  const handleLink3Change = (e) => {
    setLink3(e.target.value);
    console.log(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit} className="container mx-auto my-6  ">
      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Study Information</h2>
      <p className=" italic text-sm text-gray-500 ">Please be as specific as possible</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label htmlFor="project-name"> Study Name</label>
        <input
          id="project-name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Name Of Study"
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
          placeholder="Date of Study"
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
          placeholder="Provide a description of the study including the project's background"
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

      <div className="font-bold text-gray-700 text-sm mb-2">
        <label> Research Method </label> <br/>
        <div class="inline-block relative w-64">
  <select  value={projectMethod} onChange={handleProjectMethodChange}
  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" >
    <option value="Moderated Usability Research">Moderated Usability Research</option>
    <option value="Unmoderated Usability Research">Unmoderated Usability Research</option>
    <option value="User Interviews">User Interviews</option>
    <option value="Focus groups">Focus groups</option>
    <option value="Survey">Survey</option>
    <option value="Focus groups">Focus groups</option>
    <option value="Diary Study">Diary Study</option>
    <option value="Eye Tracking">Eye Tracking</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
      </div>
      
      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Summary of insights</h2>
      <p className=" italic text-sm text-gray-500 ">What insights from your research do you want your audience to walk away with?</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleKeyInsight1Change}
          value={keyInsight1}
        ></input>
      </div>
      

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleKeyInsight2Change}
          value={keyInsight2}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleKeyInsight3Change}
          value={keyInsight3}
        ></input>
      </div>

      <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> External Links</h2>
      <p className=" italic text-sm text-gray-500 ">Provide links for any external data, presentations, recordings, or other assets related to this study</p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleLink1Change}
          value={link1}
        ></input>
      </div>
      

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleLink2Change}
          value={link2}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Link 3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What are the top learnings from the research? "
          onChange={handleLink3Change}
          value={link3}
        ></input>
      </div>
<div>
  <FileUpload />
</div>
  
<div className="mt-8">
      <button disabled={projectName === ""} type="submit" className=" text-white focus:shadow-outline border border-gray-300 bg-blue-400 rounded-lg py-2 px-4 block w-full hover:outline-none hover:shadow-outline">
        Submit
      </button>
      </div>
    </form>
  );
}

export default NewProject;
