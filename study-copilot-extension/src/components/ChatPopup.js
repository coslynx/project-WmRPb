import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPopup = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    // Function to fetch initial messages or chat history
    const fetchMessages = async () => {
      try {
        const response = await axios.get('API_ENDPOINT');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages: ', error);
      }
    };
    
    fetchMessages();
  }, []);
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const sendMessage = async () => {
    if (input.trim() === '') return;
    
    try {
      const response = await axios.post('API_ENDPOINT', { message: input });
      setMessages([...messages, response.data]);
      setInput('');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };
  
  return (
    <div className="chat-popup">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPopup;