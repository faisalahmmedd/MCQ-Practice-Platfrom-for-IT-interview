import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ChatbotBubble.css"; // import CSS separately

const ChatbotBubble = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Hide chatbot on /quiz page
  if (location.pathname === "/quiz") return null;

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <button className="chatbot-close-btn" onClick={() => setOpen(false)}>
            ✖
          </button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/irV3RW0gVOJXcdI_h-k1Y"
            title="Chatbot"
            className="chatbot-iframe"
          ></iframe>
        </div>
      )}

      {/* Floating bubble */}
      <button className="chatbot-bubble" onClick={() => setOpen(!open)}>
        <img
          src="/13330989.png" 
          alt="Chat"
          className="chatbot-bubble-img"
        />
      </button>
    </>
  );
};

export default ChatbotBubble;
