import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState(''); /* initial value of the input box is empty. useState returns an array with two values, current data and updater function. current text in the textbox, and an updater function */

  function saveInputText(event) { /* event is an object */
    setInputText(event.target.value); /* save the change in inputText */
  }

  function sendMessage() {
    const newChatMessages = [ /* change in state doesn't update until all codes finish executing, so use a variable to store the data */
      ...chatMessages,/* This is a spread operator. Always create a copy of data and modify the copy */
      { /* Add a new value at the end of the array */
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages); 

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,/* This is a spread operator. Always create a copy of data and modify the copy */
      { /* Add a new value at the end of the array */
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]); 

    setInputText(''); /* set input text to empty*/
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input" /* change the input text*/
      />
      <button
        onClick = {sendMessage}
        className = 'send-button' /* run sendMessage when clicking the onClick button */
      >Send</button>
    </div>
  );
}