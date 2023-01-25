import React from "react";

function Chat({match}) {
  return (
    <div>
      <div className="chatbox">
        You are now chatting with:
        <p>{match.name}</p>
      </div>
    </div>
  );
}

export default Chat;
