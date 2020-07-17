import React, { useState } from "react";
import NewProject from "./pages/NewProject";
import mockProjects from "./data/projects.json";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projects, setProjects] = useState(mockProjects);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <>
      <h1 className="font-sans text-lg text-gray-800 text-left text-4xl ">
        {" "}
        Research Home
      </h1>

      <PageLayout>
        <Switch>
          <Route exact path="/">
            <Home projects={projects} />
          </Route>
          <Route path="/New Project">
            <NewProject addProject={addProject} />
          </Route>
        </Switch>
      </PageLayout>
    </>
  );
}

export default App;
