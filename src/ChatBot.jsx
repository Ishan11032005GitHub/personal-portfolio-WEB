import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = generateBotReply(input);

    setMessages([...messages, userMessage, { sender: 'bot', text: botReply }]);
    setInput('');
  };

  const generateBotReply = (message) => {
    message = message.toLowerCase();
    if (message.includes('hello') || message.includes('hi')) return 'Hello there! 😊';
    if (message.includes('name')) return "I'm a simple React chatbot!";
    if (message.includes('help')) return 'Sure! Ask me anything about this website.';
    return "I'm still learning. Can you rephrase that?";
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>AI Chatbot</span>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbox">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle-button" onClick={toggleChat}>
          💬
        </button>
      )}
    </div>
  );
}

export default Chatbot;
