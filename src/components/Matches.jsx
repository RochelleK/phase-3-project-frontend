import React, { useState, useEffect } from "react";
import MatchCarousel from "./MatchCarousel";
import NavBar from "./NavBar";

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json);
        console.log(matches);
      });
  }, []);
  console.log(matches);

  return (
    <div>
      <NavBar />
      <MatchCarousel matches={matches} />
    </div>
  );
}

export default Matches;
