import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";
import Project from "./Components/Projects/Project";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro
          title="Section 1"
          id="section1"
        />
        <AboutMe
          title="Section 2"
          id="section2"
        />
        <Project
          title="Section 3"
          id="section3"
        />
      </div>
    );
  }
}

export default App;
