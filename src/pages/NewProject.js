import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import BackButton from "../components/BackButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewProject({ addProject }) {
  // array destructuring
  // 1. the typical way
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [projectMethod, setProjectMethod] = useState("");
  const [keyInsight1, setKeyInsight1] = useState("");
  const [keyInsight2, setKeyInsight2] = useState("");
  const [keyInsight3, setKeyInsight3] = useState("");
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

  const handleSubmit = event => {
    // use this to prevent page refresh
    event.preventDefault();
    addProject({
      title: projectName,
      description: projectDescription,
      date: startDate.toDateString(),
      team: projectTeam,
      method: projectMethod,
      keyinsight1: keyInsight1,
      keyinsight2: keyInsight2,
      keyinsight3: keyInsight3,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3
    });
    setProjectName("");
  };

  const handleProjectNameChange = event => {
    console.log(event.target.value);
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = e => {
    setProjectDescription(e.target.value);
    console.log(e.target.value);
  };



  const handleProjectTeamChange = e => {
    setProjectTeam(e.target.value);
    console.log(e.target.value);
  };

  const handleProjectMethodChange = e => {
    setProjectMethod(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyInsight1Change = e => {
    setKeyInsight1(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyInsight2Change = e => {
    setKeyInsight2(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyInsight3Change = e => {
    setKeyInsight3(e.target.value);
    console.log(e.target.value);
  };

  const handleQ1Change = e => {
    setQ1(e.target.value);
    console.log(e.target.value);
  };

  const handleQ2Change = e => {
    setQ2(e.target.value);
    console.log(e.target.value);
  };

  const handleQ3Change = e => {
    setQ3(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container mx-auto mt-6 ">
    <form onSubmit={handleSubmit} >
        <div htmlFor="StudyName" className="font-extrabold text-3xl mb-4">
          {" "}
          New Study{" "}
        </div>
       
        <div className="my-4">
        <h2 className="text-lg text-gray-700 font-semibold">
          {" "}
         Study Information
        </h2>
        <p className=" italic text-sm text-gray-500 ">
          Tell us about your study
        </p>
      </div>
      
      <div className=" font-semibold text-gray-700 text-sm">
        <div className="mb-2 text-base" htmlFor="project-name"> Study Name</div>
        <input
          id="project-name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Name Of Study"
          onChange={handleProjectNameChange}
          value={projectName}
        />
      </div>

      <div className=" font-semibold flex flex-col text-gray-700 text-base mt-4 ">
        <label> Project Date</label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>

      <div className=" font-semibold text-gray-700 text-sm my-4">
        <div className="mb-2 text-base"> Project Background</div>
        <input
          id="project-description"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Provide your audience with a brief description of why the research is being conducted"
          onChange={handleProjectDescriptionChange}
          value={projectDescription}
        />
      </div>


      <div className="font-semibold text-gray-700 text-base mb-2">
        <label> Research Method </label> <br />
        <div class="inline-block relative w-64">
          <select
            value={projectMethod}
            onChange={handleProjectMethodChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline"
          >
             <option value="None Selected">Please select an option</option>
            <option value="Moderated Usability Research">
              Moderated Usability Research
            </option>
            <option value="Unmoderated Usability Research">
              Unmoderated Usability Research
            </option>
           
            <option value="User Interviews">User Interviews</option>
            <option value="Focus groups">Focus groups</option>
            <option value="Survey">Survey</option>
            <option value="Focus groups">Focus groups</option>
            <option value="Diary Study">Diary Study</option>
            <option value="Other">Other</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-4">
      <ColoredLine color="silver" />
      </div>

      <div className="my-4">
        <h2 className="text-lg text-gray-700 font-semibold">
          {" "}
          Research Questions and Insights
        </h2>
        <p className=" italic text-sm text-gray-500 ">
          What specific research questions does this study answer?
        </p>
      </div>
      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Research Question #1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What specific research questions does this study answer? "
          onChange={handleQ1Change}
          value={Q1}
        ></input>
      </div>
      <hr/>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #1</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What insights did you gather for Research Question #1?"
          onChange={handleKeyInsight1Change}
          value={keyInsight1}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Research question #2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What specific research questions does this study answer?"
          onChange={handleQ2Change}
          value={Q2}
        ></input>
      </div>


      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #2</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What insights did you gather for Research Question #2?"
          onChange={handleKeyInsight2Change}
          value={keyInsight2}
        ></input>
      </div>

      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Research question #3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What specific research questions does this study answer? "
          onChange={handleQ3Change}
          value={Q3}
        ></input>
      </div>
      
      


      <div className=" font-bold text-gray-700 text-sm mb-2">
        <label> Key insight #3</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="What insights did you gather for Research Question #3? "
          onChange={handleKeyInsight3Change}
          value={keyInsight3}
        ></input>
      </div>

      

      <div className="mt-8">
        <button
          disabled={projectName === ""}
          type="submit"
          className=" text-white focus:shadow-outline border border-gray-300 bg-blue-400  py-2 px-4 block w-full hover:outline-none hover:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}

export default NewProject;
