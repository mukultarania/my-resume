import React from "react";
import { useState } from "react";

import "./App.css";
import Exp from "./components/Exp";
import Main from "./components/main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Navbar from "./components/Navbar";

import { ThemeProvider } from "styled-components";
import { Header } from "./style";
import { THEME } from "./constants/theme";
import { getTheme } from "./themes/getTheme";

function App() {
  const [themeNames, setThemeName] = useState(THEME.DARK);

  return (
    <div>
      {/* <Navbar /> */}
      <ThemeProvider theme={getTheme(themeNames)}>
        <Header id="main-cont" className="container-fluid">
          <div className="row">
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
        </Header>
      </ThemeProvider>
    </div>
  );
}

export default App;
