import React from "react";
import ReactDOM from "react-dom/client";
import "./css_file/navigation.css";
import Photo from "./images/my_photo.png"
import TypingText from "./TypingText.js";

function Header() {


    return (
        <div id="header" className="flex-box-container-2">
            <TypingText text = "Hey! I'm Vishvamitra Kr. Singh"/>
            <p>IIT DHANBAD | BlockChain | Web Development | Competitive Programming</p>
            <br />
            <span style={{ width: "100%" }}><h3>About Me</h3></span>

            <p1 style = {{lineHeight : "3"}} >Okay! So, I'm Vishvamitra, currently in my 8th semester, pursuing an Integrated Master of Technology in Applied Geophysics at IIT (ISM) Dhanbad. Right now, I'm most interested in Full Stack Development, and I have a passion for solving Data Structure and Algorithm problems. I always strive to maintain a learning mindset; every day, I wake up with the goal of learning something new. Apart from my academic interests, I also enjoy listening to music, and occasionally, I try my hand at singing (😂). My musical taste leans towards older classics, like 'Lag Ja Gale' and songs by Kishore Da. Thank you!
            </p1>
        </div>
    );

};



export default Header;