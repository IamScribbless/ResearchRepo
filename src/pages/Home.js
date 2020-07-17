import React from "react";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";

function Home({ projects }) {
  return (
    <div className=" flex flex-col my-10 mx-24">
      <SearchBar></SearchBar>
      <Filter></Filter>
      <div className=" mt-5 grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          date={project.date}
          description={project.description}
          team={project.team}
        >
        </ProjectCard>

      
      ))}
      </div>
    </div>
   
  );
}

export default Home;



