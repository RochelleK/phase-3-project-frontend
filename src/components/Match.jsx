import React, { useState } from "react";

function Match({ match, startChat }) {
  

  return (
    <div>
      <div className="match wrapper">
        <img src={match.profile_image} />
        <p className="name">{match.name}</p>
        <button type="button" class="btn" onClick={()=>startChat(match)}>
          Let's Chat!
        </button>
      </div>
    </div>
  );
}

export default Match;
