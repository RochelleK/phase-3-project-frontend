import React from "react";
import "./chat.css";


function ChatHeader({ isDarkMode, onToggleDarkMode, match}) {
  return (
    <header className="chat-header">
      <h1 >You are now chatting with {match.name}</h1>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          checked={isDarkMode}
          onChange={(e) => onToggleDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
  );
}

export default ChatHeader;
