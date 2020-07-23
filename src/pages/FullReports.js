import React, {useState} from "react";
import FullReport from "../components/FullReport";

function FullReports({ projects }) {


  return (
    <div>
    {projects.map((project, i) => (
        <FullReport
          key={i}
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

      
      ))}
</div>
  )
}
export default FullReports;

