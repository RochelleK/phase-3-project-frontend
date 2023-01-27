import React, { useState } from "react";

function Match({ match, startChat }) {

  const deleteMatch=()=>{
    console.log("deleted"+ match.id)
    fetch(`http://localhost:9292/confirmedmatches/${match.id}`, {
      method: "DELETE",
    })
    
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
