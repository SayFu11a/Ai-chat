import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './ChatWindow.css';

const ChatWindow = () => {
   const [messages, setMessages] = useState([]);

   const addMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
   };

   return (
      <div className="chat-window">
         <ChatHeader />
         <div className="chat-messages">
            {messages.map((msg, index) => (
               <ChatMessage key={index} role={msg.role} content={msg.content} />
            ))}
         </div>
         <ChatInput messages={messages} addMessage={addMessage} />
      </div>
   );
};

export default ChatWindow;
