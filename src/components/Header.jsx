import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Header() {
  let home = useNavigate();
  const changePage = (route) => {
    home(route);
  };
  return (
    <div className="header-div">
      <div className="nav-div" onClick={() => changePage("/")}>
        <h1 className="header-title">Blindr</h1>
        <img id="nav-icon" src="/assets/blind-date.png" alt="lotus" />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
