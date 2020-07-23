import React, { useState } from "react";
import NewProject from "./pages/NewProject";
import mockProjects from "./data/projects.json";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import TopNav from "./components/TopNav";
import FullReport from "./components/FullReport"; 
import FullReports from "./pages/FullReports"; 
import SignIn from "./pages/SignIn";
import Tools from "./pages/Tools";
import Admin from "./pages/Admin";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState(mockProjects);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };


  return (
    <>
      <TopNav/>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            <Home projects={projects} />
          </Route>
          <Route path="/New Project">
            <NewProject addProject={addProject} />
          </Route>
          <Route path="/FullReports">
            <FullReports projects={projects}/>
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Tools">
            <Tools />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
        </Switch>
      </PageLayout>
    </>
  );
}

export default App;
