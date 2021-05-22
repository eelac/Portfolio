import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro id="section1" />
        <AboutMe id="section2" />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
