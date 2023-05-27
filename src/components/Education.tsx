import React from "react";
import "../App.css";

function Education() {
  return (
    <div className="card">
      <p>
        <i className="fas fa-briefcase stroke-transparent"></i>
        &nbsp;&nbsp;&nbsp;Education
      </p>
      <ul>
        <li>
          <p className="tags">
            GAUTAM BUDDHA UNIVERSITY <br />
            <span>
              GR NOIDA, UP, INDIA (2016-2021) Dual degree B Tech (Computer
              Science and Engineering) and M Tech (Artificial Intelligence and
              Robotics) <br /> <span>2016-2021</span>
            </span>
          </p>
        </li>
        <li>
          <p className="tags">
            Kendriya Vidyalaya <br />
            <span>
              12th Standard | <span>2015</span>
            </span>
          </p>
        </li>
        <li>
          <p className="tags">
            Kendriya Vidyalaya <br />
            <span>
              10th Standard | <span>2013</span>
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
