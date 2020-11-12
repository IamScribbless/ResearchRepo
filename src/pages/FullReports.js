import React, { useState, useEffect } from "react";
import FullReport from "../components/FullReport";
import SearchBar from "../components/SearchBar";
import { getProject } from "../lib/projects";
import { useParams } from "react-router-dom";



function FullReports({ projects }) {
  const params = useParams();

  const [searchFilter, setSearchFilter] = useState("");
  const [project, setProject] = useState();
  // const filteredProjects = projects.filter(project => {
  //   return project.title.toLowerCase().includes(searchFilter) || project.description.toLowerCase().includes(searchFilter)
  // });

  const handleSearchFilterChange = event => {
    setSearchFilter(event.target.value);
  };

  useEffect(() => {
    // get id for the current route
    const project = getProject(params.id).then(function(snapshot) {
      setProject(snapshot.val());
    });
    setProject(project);
    console.log("effect is running");
  }, []);

  console.log(params);

  return (
    <div>
      <div>
        {project && (
          <FullReport
            id={project.id}
            key={project.id}
            title={project.title}
            date={project.date}
            description={project.description}
            team={project.team}
            method={project.method}
            keyinsight1={project.keyinsight1}
            keyinsight2={project.keyinsight2}
            keyinsight3={project.keyinsight3}
            Q1={project.Q1}
            Q2={project.Q2}
            Q3={project.Q3}
          />
        )}

        {/* {filteredProjects.map((project) => (
        <FullReport
         id={project.id}
          key={project.id}
          title={project.title}
          date={project.date}
          description={project.description}
          team={project.team}
          method={project.method}
          keyinsight1= {project.keyinsight1}
          keyinsight2= {project.keyinsight2}
          keyinsight3= {project.keyinsight3}
          link1={project.link1}
          link2={project.link2}
          link3={project.link3}

        > 
        </FullReport>

      
      ))} */}
      </div>
    </div>
  );
}

export default FullReports;
