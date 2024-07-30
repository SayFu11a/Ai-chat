import React, { useState } from 'react';
import { getChatResponse } from '../api';
import './ChatInput.css';

const ChatInput = ({ messages, addMessage }) => {
   const [input, setInput] = useState('');

   const sendMessage = async () => {
      if (input.trim()) {
         const userMessage = { role: 'user', content: input };
         addMessage(userMessage);
         setInput('');

         const assistantMessageContent = await getChatResponse([...messages, userMessage]);
         addMessage({ role: 'assistant', content: assistantMessageContent });
      }
   };

   return (
      <div className="chat-input">
         <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Написать сообщение..."
         />
         <button onClick={sendMessage}>Send</button>
      </div>
   );
};

export default ChatInput;
