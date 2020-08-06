import React from "react";

export default function Header() {
  return (
    <div className="container">
      <header>
        <div className="main-logo">
          <img
            className="logo-col"
            src="logo_col.jpg"
            alt="chitkara university"
          ></img>
        </div>
        <div className="main-profile">
          <h3>profile</h3>
        </div>
      </header>
      
      <div className="welcome">
        <div className="welcome-note">
          <h1>welcome</h1>
          <p>here we go</p>
        </div>
        <div className="main-image">
          <img src="download.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
