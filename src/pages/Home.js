import React from "react";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

function Home({ projects }) {
  return (
    <div>
      <SearchBar />
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          date={project.date}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Home;
