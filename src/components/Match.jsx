import React, { useState, useEffect } from "react";

function Match({ match, startChat, updateMatches, setMatches}) {

  const deleteMatch=()=>{
    console.log("deleted"+ match.id)
    fetch(`http://localhost:9292/delete/${match.id}`, {
      method: "DELETE",
    })
    .then(setMatches(updateMatches))
    .then(console.log(updateMatches))
    .then( 
    fetch("http://localhost:9292/confirmedmatches")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json);
        console.log(updateMatches);
      })
  )

    // )
  }
  
  return (
    <div>
      <div className="match">
        <img className="match-card-image" src={match.meme} />
        <div className="nameandicon">
          <p className="match-name">{match.name}</p>
          <img
            src="/assets/chat.png"
            className="icons"
            onClick={() => startChat(match)}
          />
          <img
            src="/assets/remove.png"
            className="icons-two"
            onClick={() => deleteMatch(match)}
          />
        </div>
      </div>
    </div>
  );
}

export default Match;
