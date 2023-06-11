import React from "react";
import "./css/projects.css";

function Projects() {
  return (
    <div className="card">
      <p id="head-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</p>
      <ul>
        <li>
          <p className="tags">
            Vaccine Slot Tracker <br />
          </p>
          <p>
            VST, Vaccine Slot Tracker. VST can be used to find slots for
            vaccines in India using Cowin API. <br />
            <a
              id="link-color"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.api.trackslots"
            >
              Link
            </a>
          </p>
        </li>
        <li>
          <p className="tags">
            AUGMENTED REALITY IN ACADEMIA (Dissertation) <br />
          </p>
          <p>
            The main aim of this research is to make a module by which we can
            integrate AR with the smart devices. It will help students to
            increase their knowledge more towards fundamental concepts.
            <br />
            <a
              id="link-color"
              target="_blank"
              href="https://drive.google.com/file/d/1RxrmAJnC3gBqZYJP-LIm2hZ8dKvEnPVz/view?usp=sharing"
            >
              Link
            </a>
          </p>
        </li>
        <li>
          <p className="tags">
            Interactive Learning with Augmented Reality (Major Project) <br />
          </p>
          <p>
            Created AR android application using Vuforia and unity to make
            content of textbook more interactive.
            <br />
            <a
              id="link-color"
              target="_blank"
              href="https://github.com/mukultarania/AR-App"
            >
              Link
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
