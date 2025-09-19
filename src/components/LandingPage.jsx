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
            src="https://img.freepik.com/free-vector/business-growth-illustration_23-2147522684.jpg" 
            alt="Finance illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
