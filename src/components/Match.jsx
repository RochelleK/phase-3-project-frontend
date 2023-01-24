import React, { useState } from "react";

function Match({match}) {

  return (
    <div className="match">
      <img src="./assets/blind-date.png" />
      <h1>{match.name}</h1>
      <h1>{match.bio}</h1>
    </div>
  );
}

export default Match;
