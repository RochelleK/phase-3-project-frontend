import React, { useState } from "react";

function Match({ match, startChat, deleteMatch }) {
  return (
    <div>
      <div className="match">
        <img className="match-card-image" src={match.meme} />
        <p className="match-name">{match.name}</p>
        <button
          className="match-btn"
          type="button"
          onClick={() => startChat(match)}
        >
          Let's Chat!
        </button>
        <button
          className="match-btn-1"
          type="button"
          onClick={() => deleteMatch(match)}
        >
          UnMatch :/
        </button>
      </div>
    </div>
  );
}

export default Match;
