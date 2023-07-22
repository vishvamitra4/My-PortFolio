import React from "react";
import ReactDOM from "react-dom/client"
import "./css_file/skill.css"
import AllSkills from "../Data"


function Skill() {
    const skills = AllSkills.skills.map(item => {
        return (
            <div>
                <p>{item.name}</p>
                <div className="progress">
                    <div style={{backgroundColor : "#4e4e4e" , width : item.proficiency , padding : "16px"}}></div>
                </div>
            </div>

        )
    })

    return (
        <div id="skill" className="flex-box-container-3">
            <h3>Skills</h3>
            <div className="flex-box-container-3-1">{skills}</div>
        </div>
    )
}


export default Skill