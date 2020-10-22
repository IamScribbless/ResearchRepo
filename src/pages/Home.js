import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import { writeProjectData, getProjects } from "../lib/projects";
import Folders from "../components/Folders";
import ProjectFilter from "../components/ProjectFilter";
import Welcome from "../components/Welcome";
import TeamFeed from "../components/TeamFeed";
import { Link } from "react-router-dom";

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
      <div>
        <Welcome />
      </div>
      <section className= "flex flex-row">
      <div className="w-5/6 mt-12 mb-3 mr-6 ml-48">
        <SearchBar handleSearchFilterChange={handleSearchFilterChange} />
      </div>
      <div>
      <Link to="/NewStudy"> <button className="text-white w-max border bg-gray-800 border-gray-800 rounded-lg px-3 py-2 my-1 mt-2 text-md font-semibold  mt-12 mb-3 mr-6">New</button></Link>
      </div>
      </section>

      <section className="flex justify-center">
        
        <ProjectFilter />
        <div className=" justify-self-auto mx-auto grid  grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2">
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
        
      </section>
    </div>
  );
}

export default Home;
