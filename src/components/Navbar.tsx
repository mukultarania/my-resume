import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item font-weight-bold">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">About</a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
