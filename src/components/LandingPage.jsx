import React from "react";
import "./LandingPage.css";
import NavBar from "./NavBar";

function LandingPage({ onStart }) {
  return (
    <div className="landing-container">
      <NavBar />

      <div className="landing-content">
        <div className="landing-text">
          <h1>The easiest way to manage personal finances</h1>
          <h2>Money Manager</h2>
          <button className="cta-btn" onClick={onStart}>
            Try it for Free
          </button>
        </div>

        <div className="landing-image">
          <img
            src="https://cdn.dribbble.com/users/2442290/screenshots/14040701/dribbble-post_4x.png" 
            alt="Finance illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
