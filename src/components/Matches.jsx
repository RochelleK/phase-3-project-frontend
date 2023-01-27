import React, { useState, useEffect } from "react";
import Header from "./Header";
import MatchCarousel from "./MatchCarousel";
import MatchCards from "./MatchCards";
import Chat from "./Chat";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [beltPosition, setBeltPosition] = useState(0);
  const [match, setMatch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/confirmedmatches")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json);
        console.log(matches);
      });
  }, []);

  console.log(matches);

  function startChat(match) {
    setMatch(match);
    
  }


  return (
    <div>
      <Header />
      <div className="matches-main-div">
        <MatchCarousel
          startChat={startChat}
          beltPosition={beltPosition}
          setBeltPosition={setBeltPosition}
          matches={matches.slice(beltPosition, beltPosition + 4)}
          updateMatches={matches}
          setMatches={setMatches}
        />
        <div className="match-chat-div">
          <MatchCards match={match} setMatch={match} />
        </div>
      </div>
    </div>
  );
}

export default Matches;
