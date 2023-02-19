import React from "react";
import "./About.css";

function About() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details-role">
          {" "}
          <p>
            A highly motivated individual with a passion for constantly
            developing skills and growing professionally. I thrive for
            creativity, innovation and aesthetics. I am a fast learner, always
            on the lookout for opportunities.
          </p>
        </div>
        <div className="profile-details-eduction">
          {" "}
          <div>
            <h6>GAUTAM BUDDHA UNIVERSITY</h6>
            <p>
              GR NOIDA, UP, INDIA (2016-2021) Dual degree B Tech (Computer
              Science and Engineering) and M Tech (Artificial Intelligence and
              Robotics)
            </p>
          </div>
          <div>
            <h6>Kendriya Vidyalaya (KV)</h6>
            <p>12th Standard (2015)</p>
          </div>
          <div>
            <h6>Kendriya Vidyalaya (KV)</h6>
            <p>10th Standard (2013)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
