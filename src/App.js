import React, { useState, useEffect } from "react";
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
import Questions from "./pages/Questions";
import ProjectCard from "./components/ProjectCard";
import Landing from "./pages/Landing";
import TaskList from "./components/TaskList";
import InterviewForm from "./components/InterviewForm";
import Flow from "./components/Flow"; 
import NewStudy from "./pages/NewStudy"; 
import GiveFeedback from "./pages/GiveFeedback";
import BackButton from "./components/BackButton"; 
import {writeProjectData, getProjects} from "./lib/projects";


function App() {

 const [projects, setProjects] = useState();
 
 
  const addProject = (project) => {
    writeProjectData(project).then(response => {
      getProjects().then(snapshot => {
        const projects = Object.entries(snapshot.val() || {}).map(([key, value]) => {
        return {id:key, ...value} 
        })
        setProjects(projects)
      })
    })
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
          <Route path="/NewStudy">
            <NewStudy/>
          </Route>
          <Route path="/FullReports/:id">
            <FullReports projects={projects}/>
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Flow">
            <Flow />
          </Route>
          <Route path="/Tools">
            <Tools />
          </Route>
          <Route path="/Questions">
            <Questions />
          </Route>
          <Route path="/Landing">
            <Landing />
          </Route>
          <Route path="/TaskList">
            <TaskList />
          </Route>
          <Route path="/InterviewForm">
            <InterviewForm />
          </Route>
          <Route path="/GiveFeedback">
            <GiveFeedback />
          </Route>
        </Switch>
      </PageLayout>
    </>
  );
}

export default App;
