import React from "react";
import ChatApp from "./Chats/ChatApp";

function Chat({match}) {
  return (
    <div className="chat-container">
      <div >
        <ChatApp match={match}/>
      </div>
    </div>
  );
}

export default Chat;
