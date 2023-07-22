import React from "react";
import { ReactDOM } from "react-dom/client";
import './App.css'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Cp from "./components/Cp";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App()
{
  return (
    <div>
      <Navigation />
      <Header />
      <Skill />
      <Cp />
      <Project />
      <Footer />
    </div>
  )
}



export default App;