import React from "react";
import { useState } from "react";
import "./css/navbar.css";

function Navbar() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  function setTheme(state:boolean) {
    setChecked(state);
  } 

  return (
    <div className="row justify-content-end">
      <div id="theme-switch" className="col">
        <div className="toggle-switch">
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setTheme(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
