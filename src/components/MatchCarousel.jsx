import React from 'react'
import Match from './Match';

function MatchCarousel({matches, setBeltPosition, beltPosition, startChat}) {

  function addMoreMatches(){
    setBeltPosition(beltPosition + 4)
    console.log("button clicked")
  }
  return (
    <div>
      <div className="belt">
        {matches.map((match) => (
          <Match key={match.id} match={match} startChat={startChat}/>
        ))}
      
      </div>
      <button onClick={addMoreMatches}> ADD MORE MATCHES </button>
    </div>
  );
}

export default MatchCarousel