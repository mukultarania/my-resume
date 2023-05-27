import React from "react";
import "./App.css";
import Exp from "./components/Exp";
import Main from "./components/main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div id="main-cont" className="container-fluid">
      <div  className="row">
        <div className="col">
          <Main />
        </div>
        <div id="info-cards" className="col">
          <Education />
          <Exp />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
