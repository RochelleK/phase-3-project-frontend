import React from 'react'
import Match from './Match';

function MatchCarousel({matches}) {
  return (
    <div>
      MatchCarousel
      <div className="belt">
        {matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
        <button 
        // onClick={addMoreSushi}
        >
          >> </button>

        {/* <MoreButton addMoreMatches={addMoreMatches} /> */}
      </div>
    </div>
  );
}

export default MatchCarousel