import React, { useState } from "react";
import axios from "axios";

interface Message {
  text: string;
  sender: string;
}

const Chatbots: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (!input) return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    try {
      // Call your GPT-based API
      const response = await axios.post<{ message: string }>(
        "https://bots.cxgenie.ai/?aid=0dd36a8c-cf42-48b0-ae25-6b16632e6075",
        { message: input }
      );
      const botMessage = response.data.message;

      setMessages([...messages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response from API:", error);
    }
  };

  return (
    <div>
      <div style={{ height: "300px", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{ textAlign: message.sender === "user" ? "right" : "left" }}
          >
            <span
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                background: message.sender === "user" ? "#007bff" : "#28a745",
                color: "#fff",
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbots;
