import React from "react";
import Match from "./Match";

function MatchCarousel({ matches, setBeltPosition, beltPosition, startChat, updateMatches, setMatches}) {
  function addMoreMatches() {
    setBeltPosition(beltPosition + 1);
    console.log("button clicked");
  }
  return (
    <div className="matchcaraousel">
      {matches.map((match) => (
        <Match key={match.id} match={match} startChat={startChat} updateMatches={updateMatches} setMatches={setMatches}/>
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
