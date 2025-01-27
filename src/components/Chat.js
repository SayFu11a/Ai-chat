// src/components/Chat.js
import React, { useState } from 'react';
import Message from './Message';
import { getChatResponse } from '../api';

const Chat = () => {
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState('');

   const sendMessage = async () => {
      const userMessage = { role: 'user', content: input };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);

      const assistantMessage = await getChatResponse(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
      setInput('');
   };

   return (
      <div className="chat-container">
         <div className="messages">
            {messages.map((msg, index) => (
               <Message key={index} role={msg.role} content={msg.content} />
            ))}
         </div>
         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
         />
         <button onClick={sendMessage}>Send</button>
      </div>
   );
};

export default Chat;
