import React from "react";
import ChatApp from "./Chats/ChatApp";

function Chat({match}) {
  return (
    <div>
      <div className="form">
        <br></br>
        <ChatApp match={match}/>
      </div>
    </div>
  );
}

export default Chat;
