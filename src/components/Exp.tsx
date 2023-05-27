import React from "react";
import "../App.css";

function Exp() {
  return (
    <div className="card">
      <p>
        <i className="fas fa-briefcase stroke-transparent"></i>
        &nbsp;&nbsp;&nbsp;Experience
      </p>
      <ul>
        <li>
          <p className="tags">
            TCS, Delhi — Backend Developer <br />
            <span>
              <span>October 2021 - PRESENT</span>
            </span>
          </p>
          <p>
            Worked on the upgradation of microservice and end-to-end deployment
            of code. Also worked on the adoption of the BOM files. Worked on new
            design changes to the existing flow for one of the packaging
            services.
          </p>
        </li>
        <li>
          <p className="tags">
            Software Developer Intern, Remote - Developer (May 2020 - October
            2020) <br />
            <span>
              <span>May 2020 - October 2020</span>
            </span>
          </p>
          <p>
            Worked as a part of the Job Board (Web Services) team to develop
            Job-Fair website for Gautam Buddha University.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Exp;
