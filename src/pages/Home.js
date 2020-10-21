import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import { writeProjectData, getProjects } from "../lib/projects";
import Folders from "../components/Folders";
import ProjectFilter from "../components/ProjectFilter";

function Home({}) {
  const [searchFilter, setSearchFilter] = useState("");
  const [projects, setProjects] = useState([]);
  const filteredProjects = projects.filter(project => {
    return (
      project.title.toLowerCase().includes(searchFilter) ||
      project.description.toLowerCase().includes(searchFilter)
    );
  });

  const handleSearchFilterChange = event => {
    setSearchFilter(event.target.value);
  };

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

  return (
    <div className=" container mx-auto flex flex-col my-0 mx-6">
      <div className=" mx-auto mt-12">
        <SearchBar handleSearchFilterChange={handleSearchFilterChange} />
      </div>

      <div className="flex  justify-center">
        <ProjectFilter />
        <div className="  mx-auto grid  grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2">
          {filteredProjects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              date={project.date}
              description={project.description}
              team={project.team}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
