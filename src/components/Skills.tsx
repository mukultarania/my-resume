import React from "react";
import { useRef, useState } from "react";

function Skills() {
  var request: any = {
    "lang":["Java", "C++", "Python", "JavaScript", "Type Script"],
    "it-const":["DS and Algorithm", "OOPS", "OS", "DBMS", "Agile"],
    "dev-tools":["VS Code", "Unity", "Android Studio", "Eclipse", "Intellij", "SQL Developer"],
    "fw":["fw", "WordPress", "Spring", "React JS"],
    "code-rep":["code-rep", "GitHub", "Bitbucket"],
    "db-lang":["SQL", "SQL-Lite"],
    "ot-tools":["Splunk", "OpenShift", "MegaMind", "Jira", "Jenkins", "Teamcity"]
  };

  var map = new Map();
  map.set("lang", "Java, C++, Python, JavaScript, Type Script");
  map.set("it-const", "DS and Algorithm, OOPS, OS, DBMS, Agile");
  map.set("dev-tools", "VS Code, Unity, Android Studio, Eclipse, Intellij, SQL Developer");
  map.set("fw", "WordPress, Spring, React JS");
  map.set("code-rep", "GitHub, Bitbucket");
  map.set("db-lang", "SQL, SQL-Lite");
  map.set("ot-tools", "Splunk, OpenShift, MegaMind, Jira, Jenkins, Teamcity");
  const [updated, setUpdated] = useState("");
  
  async function language(parm: string) {
    setUpdated(map.get(parm));
    var arr = request[parm];
    // return (
    //   <div>
    //     for (let index = 0; index < arr.length; index++) {
    //       <div>
    //         {arr[index]}
    //       </div>
    //     }
    //   </div>
    // );
  }

  return (
    <div className="container-fluid">
      <div className="skills-tab">
        <ul className="nav nav-tabs nav-fill">
          <li className="nav-item">
            <button onClick={() => language("lang")}>Languages</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("it-const")}>IT Construct</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("dev-tools")}>Development Tools</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("fw")}>Framework</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("code-rep")}>Code Repositories</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("db-lang")}>DB Languages</button>
          </li>
          <li className="nav-item">
            <button onClick={() => language("ot-tools")}>Other Tools</button>
          </li>
        </ul>
      </div>
      <div className="skills-data">
        <p>{updated}</p>
      </div>
    </div>
  );
}

export default Skills;
