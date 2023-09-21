import React from "react";
import { ReactDOM } from "react-dom/client";
import "./css_file/project.css";
import Data from "../Data";
import { UserCard } from 'react-ui-cards';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'
function project() {

  const AllProjects = Data.projects.map(item => {
    return (

      <div className="card">

        <FlippingCard>
          <FlippingCardBack>
            <div className="back">
              <h3>{item.name}</h3>
              <p>{item.about}</p>
              <div style={{textAlign : "left"}}>
                <button><a href={item.url} target="_blank">WebApp</a></button>
                <button><a href={item.github} target="_blank">github</a></button>
              </div>
            </div>
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="front">
              <img src = {item.image} />
            </div>
          </FlippingCardFront>
        </FlippingCard>
        {/* <h4>{item.name}</h4>

        <p>{item.about}</p>
        <div>
          <button><a href={item.url} target="_blank">WebApp</a></button>
          <button><a href={item.github} target="_blank">github</a></button>
        </div> */}
      </div>
    )
  })

  return (
    <div id="project" className="container">
      <h3>Projects</h3>
      {AllProjects}
    </div>
  )
};

export default project;