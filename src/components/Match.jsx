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
      <div className="match wrapper">
        <img src={match.profile_image} />
        <p className="name">{match.name}</p>
        <button type="button" class="btn" onClick={() => startChat(match)}>
          Let's Chat!
        </button>
        <button type="button" class="btn" onClick={() => deleteMatch(match)}>
          UnMatch :/
        </button>
      </div>
    </div>
  );
}

export default Match;
