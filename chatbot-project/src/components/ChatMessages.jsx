import { useRef, useEffect} from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null); /* automatically save an HTML element in an component.  */

  useEffect(() => { /* React will run this function after component is created and every time the component is updated*/
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]); /* Dependency array. Run chatMessages every time the data is changed */

  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  )
}

export default ChatMessages;