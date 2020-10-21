import { database } from "../firebase";

import { v4 as uuidv4 } from "uuid";

export function writeProjectData(project) {
  return database.ref(`/projects/${uuidv4()}`).set(project);
}

export function getProjects() {
  return database.ref("/projects/").once("value");
}

export function getProject(id) {
  return database.ref("/projects/" + id).once("value");
}


export function deleteProject(id) {
    return database.ref("/projects/" + id).remove();
}