import React from "react";
import Match from "./Match";

function MatchCarousel({ matches, setBeltPosition, beltPosition, startChat }) {
  function addMoreMatches() {
    setBeltPosition(beltPosition + 4);
    console.log("button clicked");
  }
  return (
    <div className="matchcaraousel">
      {matches.map((match) => (
        <Match key={match.id} match={match} startChat={startChat} />
      ))}
      <img
        src="/assets/next2.png"
        className="match-button"
        onClick={addMoreMatches}
      />
    </div>
  );
}

export default MatchCarousel;
