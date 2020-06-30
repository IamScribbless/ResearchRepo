import React from "react";
import ProjectCard from "./components/ProjectCard";
import NewProject from "./components/NewProject";

const projects = [
  {
    title: "project title",
    date: "project date",
    description: "project description",
  },

  {
    title: "project title",
    date: "project date",
    description: "project description",
  },
];

function App() {
  return (
    <>
      <h1 className="font-sans text-lg text-gray-800 text-left text-4xl ">
        {" "}
        Research Home
      </h1>

      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          date={project.date}
          description={project.description}
        />
      ))}

      <NewProject />
    </>
  );
}

export default App;
