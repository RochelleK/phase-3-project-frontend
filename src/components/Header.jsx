import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="header-div">
      <div className="nav-div">
        <h1 className="header-title">Love is Blind</h1>
        <img id="nav-icon" src="/assets/blind-date.png" alt="lotus" />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
