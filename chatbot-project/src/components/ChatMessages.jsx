import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatInput.css';
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  //reminder: have to give useEffect a function -- must use arrow function inside to do this
  //react will run this function after component is created or updated
  const chatMessagesRef = useRef(null);//automatically save an html element from the component (so it's saving the html stuff that is getting returned from the component)
  //the null is the initial value saved inside this container.
  // below we give it the ref we created above==>react will take the below html element and save it inside chatMessagesRef

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;//scrolltop is how far away from the top it should scroll to
    }
  }, [chatMessages]);//use effect runs whenever the variable in the dependency array is updated
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              //map lets us go through each value in an array and convert it into a new value
              //chatMessage in the parameter - it takes the value and converts it into the new value
              //The new value is whatever we return in the map function
              //The map function returns an array of components and you can either save it into a variable 
              //or just return it. In this case we are just putting the list in {} and returning it

              //if we insert an array of components we need a unique "key" prop 
              //==> this helps react track changes in the array/list
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          )
        })
      }
    </div>
  )

}

export default ChatMessages;