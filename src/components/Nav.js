import React from "react";
import { Link } from "react-router-dom";
import NewProject from "../pages/NewProject";
import ProjectCard from "./ProjectCard";

export default function BasicExample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/New Project">New Project</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}
