import React, { useState } from "react";

function Match({ match, startChat, deleteMatch }) {
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
