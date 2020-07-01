import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import mockProjects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [projects] = useState(mockProjects);
  return (
    <>
      <SearchBar />
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          date={project.date}
          description={project.description}
        />
      ))}
    </>
  );
}

export default Home;
