import React, { useState } from "react";

function Match({ match, startChat, deleteMatch }) {
  

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
