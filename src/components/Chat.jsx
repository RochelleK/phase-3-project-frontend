import React from "react";
import ChatApp from "./Chats/ChatApp";

function Chat({match}) {
  return (
    <div>
      <div className="form">
        THIS IS THE CHAT BOX.
        <br></br>
        You are now chatting with:
        {/* <h1>{match.name}</h1> */}
        <ChatApp match={match}/>
      </div>
    </div>
  );
}

export default Chat;
