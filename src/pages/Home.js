import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";

function Home({ projects }) {
  const [searchFilter, setSearchFilter] = useState(""); 
  const filteredProjects = projects.filter(project => {
    return project.title.toLowerCase().includes(searchFilter) || project.description.toLowerCase().includes(searchFilter)
  });

  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };


  return (
    <div className=" flex flex-col my-10 mx-24">
      <div className="container mx-auto mt-4" >
      <SearchBar
      handleSearchFilterChange={handleSearchFilterChange}
      />
      <Filter/>
      </div>
      <br />
      <div className=" container mx-auto grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          date={project.date}
          description={project.description}
          team={project.team}
        /> 
        
      ))}
      </div>
    </div>
   
  );
}

export default Home;



