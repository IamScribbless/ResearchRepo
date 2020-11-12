import React from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import { database } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../lib/projects";
import QuestionCard from "./QuestionCard";
import QuestionCard2 from "./QuestionCard2";
import QuestionCard3 from "./QuestionCard3";

function FullReport({
  title,
  date,
  description,
  team,
  keyinsight1,
  keyinsight2,
  keyinsight3,
  Q1,
  Q2,
  Q3,
  id,
  key,
  method
}) {
  const location = useLocation();
  const params = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(snapshot => {
      const projects = Object.entries(snapshot.val() || {}).map(
        ([key, value]) => {
          return { id: key, ...value };
        }
      );
      setProjects(projects);
    });
  }, []);

  function deleteProject(id) {
    return database.ref("/projects/" + id).remove();
  }

  return (
    <div className="container mx-auto pt-12">
      <div className="flex flex-row ">
        <div className=" flex w-1/2 flex-col">
          <p className="font-extrabold text-3xl">{title}</p>

          
            <p className="text-gray-800 text-xl"> {date} </p>
            <div className="flex flex-row">
            <Button>share</Button>
            <Button
              onClick={() => {
                const confirmed = window.confirm(
                  "Are you sure you want to delete the project?"
                );
                if (confirmed) {
                  deleteProject(params.id);
                }
              }}
              color="red"
            >
              delete
            </Button>
          </div>

          <div>
            <div className=" my-4">
              <p className="font-semibold text-xl"> Study Background </p>
              <p className="">{description} </p>
            </div>

            <div className=" my-2">
              <p className="font-semibold text-xl"> Method </p>
              <p>{method}</p>
            </div>
          </div>
          <div className=" my-2">
              <p className="font-semibold text-xl"> Tags </p>
              <p>{method}</p>
            </div>
            <div className=" my-2">
              <p className="font-semibold text-xl"> Primary Researcher </p>
              <p>{team}</p>
            </div>
            <div className=" my-2">
              <p className="font-semibold text-xl"> External Links </p>
              <p>{}</p>
            </div>
         
        </div>

        <div className="flex w-1/2 pt-20  flex-col mt-10 ">
          <div className="flex flex-col">
            <div className="m-4">
              <p className="font-semibold text-xl pb-1 ml-6">
                {" "}
                Summary of Insights{" "}
              </p>
              <div className="p-4">
              {projects.map(project => (
                <QuestionCard title={project.title} Q1={project.Q1} date={project.date} keyinsight1={project.keyinsight1} />
              ))}
              </div>
              <div className="p-4">
              {projects.map(project => (
                <QuestionCard2 title={project.title} Q2={project.Q2} date={project.date} keyinsight2={project.keyinsight2}/>
              ))}
              </div>
              <div className="p-4">
              {projects.map(project => (
                <QuestionCard3 title={project.title} Q3={project.Q3} date={project.date} keyinsight3={project.keyinsight3} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullReport;
