import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
   return (
      <div className="App">
         <Sidebar />
         <ChatWindow />
      </div>
   );
}

export default App;
