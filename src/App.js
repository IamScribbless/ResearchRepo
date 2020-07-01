import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import NewProject from "./pages/NewProject";
import Nav from "./components/Nav";
import mockProjects from "./data/projects.json";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1 className="font-sans text-lg text-gray-800 text-left text-4xl ">
        {" "}
        Research Home
      </h1>

      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/New Project">
          <NewProject />
        </Route>
      </Switch>
    </>
  );
}

export default App;
