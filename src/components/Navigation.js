import React from "react";
import ReactDOM from "react-dom/client";
import "./css_file/navigation.css";
import Myphoto from "./images/my_photo.png"


function Navigation() {


    return (
        <div className="flex-box-container-1">

            <img src= {Myphoto} alt = "My_Photo" />
            <a id="activee" href= "#header">
                <i className="fa fa-home w3-xxlarge"></i>
                <p>ABOUT</p>
            </a>
            <a href="#skill"><i className="fa fa-user w3-xxlarge"></i>
                <p>SKILL</p>
            </a>
            <a href="#project"><i className="fa fa-eye w3-xxlarge"></i>
                <p>PROJECTS</p>
            </a>
            <a href= "#footer" ><i className="fa fa-envelope w3-xxlarge"></i>
                <p>CONTACT</p>
            </a>
        </div>
    );
    
};



export default Navigation;