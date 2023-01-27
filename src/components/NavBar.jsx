import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  const changePage = (route) => {
    navigate(route);
  };

  return (
    <div className="nav-options">
      <button className="nav-item" onClick={() => changePage("/profile")}>
        Profile
      </button>
      <button className="nav-item" onClick={() => changePage("/browse")}>
        Browse
      </button>
      <button className="nav-item" onClick={() => changePage("/matches")}>
        Matches
      </button>
    </div>
  );
}

export default NavBar;

