import React from "react";
import "./intro.css";

function intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="header">
          <h1>hello and welcome</h1>
        </div>
        <div className="welcome">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint
            nobis libero omnis quaerat rem deleniti excepturi ut amet, ex id
            harum, illum sapiente deserunt et cupiditate ab ratione nam?
          </p>
        </div>
        <div className="signup-button">
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default intro;
