import React from "react";
import ReactDOM from "react-dom/client";
import "./css_file/navigation.css";
import Photo from "./images/my_photo.png"

function Header() {


    return (
        <div id="header" className="flex-box-container-2">
            <h1>I'm Vishvamitra Singh</h1>
            <p>IIT ISM DHANBAD | Freelancer | Web Developer | Competitive Programming</p>
            <br />
            <span style={{ width: "100%" }}><h3>About Me</h3></span>

            <p1>Okay! So.... Myself Vishvamitra currently (8th sem) persuing Integrated Master of technology in Applied Geophysics from IIT (ISM) Dhanbad.

                Currently I am most into Full stack development, also I love to solve Data structure and Algorithm Problems.

                I always try to keep myself into learning mode, Everyday i used to wake up with a goal that, i will learn something different today.

                Apart from these things for entertainment purposes, I love to hear music sometime also i try to sing(😂).My taste toward music is bit old age.(like:- lag ja gale...,kishore daa).

                Thank you...
            </p1>
        </div>
    );

};



export default Header;