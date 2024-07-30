// src/components/Message.js
import React from 'react';
import './Message.css';

const Message = ({ role, content }) => {
   return <div className={`message ${role}`}>{content}</div>;
};

export default Message;
