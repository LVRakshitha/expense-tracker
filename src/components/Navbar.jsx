import React from "react";
import "./NavBar.css";

function NavBar({ setPage }) {
  return (
    <div className="navbar">
      <h2 className="logo">💰 ExpenseApp</h2>
      <ul>
        <li>
          <span onClick={() => setPage("landing")} className="nav-link">
            Home
          </span>
        </li>
        <li>
          <span onClick={() => setPage("logs")} className="nav-link">
            Logs
          </span>
        </li>
        <li>
          <span onClick={() => setPage("tracker")} className="nav-link">
            Tracker
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
