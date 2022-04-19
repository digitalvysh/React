import React from "react";
import logo from "./images/logo.png";
import cameraicon from "./images/cameraicon.png";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div id="name-and-logo">
          <img src={logo} alt="logo"></img>
          <h2>Instaclone</h2>
        </div>
        <img src={cameraicon} alt="camara icon"></img>
      </div>
      <div className="whitespace"></div>
    </div>
  );
}