import React, { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = menu ? "main-nav show" : "main-nav";
  return (
    <div className="container">
      <header>
        <div className="main-logo">
          <img
            style={{ visibility: menu && "hidden" }}
            className="logo-col"
            src="logo_col.jpg"
            alt="chitkara university"
          ></img>
        </div>
        <div className="main-profile">
          <i onClick={() => setMenu(!menu)} className="fas fa-bars fa-2x"></i>
        </div>
        <ul className={handleMenu}>
          <li>
            <a href="#">
              <img className="profile-img" src="photo.jpg" alt="Profile" />
            </a>
          </li>
          <li>
            <a href="#">Apply Duty/Medical Leave </a>
          </li>

          <li>
            <a href="#">Gate pass</a>
          </li>

          <li>
            <a href="#">Attendence</a>
          </li>

          <li>
            <a href="#">Time Table</a>
          </li>
          <li>
            <a href="#">Marks</a>
          </li>
          <li>
            <a href="#">Grades</a>
          </li>

          <li>
            <a href="#">Fine</a>
          </li>

          <li>
            <a href="#">Fee</a>
          </li>

          <li>home</li>
          <li>home</li>
          <li>home</li>

          <li>home</li>

          <li>home</li>

          <li>home</li>
        </ul>
      </header>

      <div className="welcome">
        <div className="welcome-note">
          <h1>Welcome</h1>
          <p>here we go</p>
        </div>
        <div className="main-image">
          <img src="download.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
