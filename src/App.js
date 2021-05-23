import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";

import Section from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <AboutMe
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
      </div>
    );
  }
}

export default App;
