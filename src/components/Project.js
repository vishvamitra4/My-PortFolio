import React from "react";
import { ReactDOM } from "react-dom/client";
import "./css_file/project.css";
import Data from "../Data";

function project()
{
    
  const AllProjects = Data.projects.map(item =>
    {
      return(
        <div className="card">
        <h4>{item.name}</h4>
  
        <p>{item.about}</p>
        <div>
          <button><a href={item.url} target = "_blank">WebApp</a></button>
          <button><a href={item.github} target = "_blank">github</a></button>
        </div>
        </div>
      )
    })

    return(
      <div id = "project" className="container">
      <h3>Projects</h3>
      {AllProjects}
      </div>
    )
};

export default project;