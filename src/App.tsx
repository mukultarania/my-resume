import React from "react";
import "./App.css";
import About from "./components/About";
import Exp from "./components/Exp";
import Main from "./components/main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div id = "mmenu" className="container main_container">
      <div className="row p-3 my-3 border">
        <Main/>
      </div>
      <div className="row p-3 my-3 border">
        <About />
      </div>
      <div className="row p-3 my-3 border">
        <Exp/>
      </div>
      <div className="row p-3 my-3 border">
        <Skills/>
      </div>
      <div className="row p-3 my-3 border">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
