import React from "react";
import { useRef, useState } from "react";
import "../App.css";

function Skills() {
  var request: any = {
    lang: ["Java", "C++", "Python", "JavaScript", "Type Script"],
    "it-const": ["DS and Algorithm", "OOPS", "OS", "DBMS", "Agile"],
    "dev-tools": [
      "VS Code",
      "Unity",
      "Android Studio",
      "Eclipse",
      "Intellij",
      "SQL Developer",
    ],
    fw: ["fw", "WordPress", "Spring", "React JS"],
    "code-rep": ["code-rep", "GitHub", "Bitbucket"],
    "db-lang": ["SQL", "SQL-Lite"],
    "ot-tools": [
      "Splunk",
      "OpenShift",
      "MegaMind",
      "Jira",
      "Jenkins",
      "Teamcity",
    ],
  };

  var map = new Map();
  map.set("lang", "Java, C++, Python, JavaScript, Type Script");
  map.set("it-const", "DS and Algorithm, OOPS, OS, DBMS, Agile");
  map.set(
    "dev-tools",
    "VS Code, Unity, Android Studio, Eclipse, Intellij, SQL Developer"
  );
  map.set("fw", "WordPress, Spring, React JS");
  map.set("code-rep", "GitHub, Bitbucket");
  map.set("db-lang", "SQL, SQL-Lite");
  map.set("ot-tools", "Splunk, OpenShift, MegaMind, Jira, Jenkins, Teamcity");
  const [updated, setUpdated] = useState("");

  async function language(parm: string) {
    setUpdated(map.get(parm));
    var arr = request[parm];
  }
  if (updated.length == 0) {
    language("lang");
  }

  return (
    <div className="card">
      <p>
        <i className="fas fa-briefcase stroke-transparent"></i>
        &nbsp;&nbsp;&nbsp;Skills
      </p>
      <div className="row fas fa-briefcase stroke-transparent ">
        <div className="col border rounded" onClick={() => language("lang")}>
          Languages
        </div>
        <div
          className="col border rounded"
          onClick={() => language("it-const")}
        >
          IT Construct
        </div>
        <div
          className="col border rounded"
          onClick={() => language("dev-tools")}
        >
          Development Tools
        </div>
        <div className="col border rounded" onClick={() => language("fw")}>
          Framework
        </div>
        <div
          className="col border rounded"
          onClick={() => language("code-rep")}
        >
          Code Repositories
        </div>
        <div className="col border rounded" onClick={() => language("db-lang")}>
          DB Languages
        </div>
        <div
          className="col border rounded"
          onClick={() => language("ot-tools")}
        >
          Other Tools
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">{updated}</div>
    </div>
  );
}

export default Skills;
