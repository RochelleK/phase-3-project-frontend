import React from "react";
import Match from "./Match";

function MatchCarousel({ matches, setBeltPosition, beltPosition, startChat, updateMatches, setMatches}) {
  
  function showPreviousMatches() {
    setBeltPosition(beltPosition - 1);
    console.log("back button clicked");
  }
  function showNextMatches() {
    setBeltPosition(beltPosition + 1);
    console.log("next button clicked");
  }
  return (
    <div className="matchcaraousel">
      <img
        src="assets/back-button.png"
        className="match-button"
        onClick={showPreviousMatches}
      />
      {matches.map((match) => (
        <Match key={match.id} match={match} startChat={startChat} updateMatches={updateMatches} setMatches={setMatches}/>
      ))}
      <img
        src="/assets/next2.png"
        className="match-button"
        onClick={showNextMatches}
      />
    </div>
  );
}

export default MatchCarousel;
