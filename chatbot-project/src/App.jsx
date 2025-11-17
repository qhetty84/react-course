import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([{
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1'
    }, {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
    }, {
      message: 'can you get me todays date?',
      sender: 'user',
      id: 'id3'
    }, {
      message: 'Today is September 27',
      sender: 'robot',
      id: 'id4'
    }]);
    // const [chatMessages, setChatMessages] = array; /* Array Destructuring. The order matters! */
    // const chatMessages = array[0]; /* current chat message */
    // const setChatMessages = array[1];/* Updater function that updates data, don't use push! Push doesn't update HTML */

    return (
      <div className="app-container">
        <ChatMessages 
          chatMessages={chatMessages}
        />
        <ChatInput /* share state between multiple components */
          chatMessages={chatMessages} /* save array inside prop */
          setChatMessages={setChatMessages}
        />
      </div>
    );
  }

export default App
