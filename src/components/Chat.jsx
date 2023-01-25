import React from "react";

function Chat({match}) {
  return (
    <div>
      <div className="form">
        THIS IS THE CHAT BOX.
        <br></br>
        You are now chatting with:
        <h1>{match.name}</h1>
      </div>
    </div>
  );
}

export default Chat;
