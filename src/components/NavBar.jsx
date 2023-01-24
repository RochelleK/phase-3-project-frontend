import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    let navigate = useNavigate();
    const changePage = (route) => {
       navigate(route);
   } 

  return (
    <div>
      <button className="navbutton" onClick={() => changePage("/profile")}>
        Profile
      </button>
      <button className="navbutton" onClick={() => changePage("/browse")}>
        Browse
      </button>
      <button className="navbutton" onClick={() => changePage("/matches")}>
        Matches
      </button>
    </div>
  );
}

export default NavBar;
