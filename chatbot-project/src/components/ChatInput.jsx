import { useState } from 'react'
import { Chatbot } from 'supersimpledev'



export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  function saveInputText(event) {//event is an obj that contains details about the change
    setInputText(event.target.value) //event.target gives us the element that we're typing in that we changed
    //event.target.value is how we get the text inside the input. Use state to save data that changes over time, like the text in textbox
    //every time you change the text it is going to run the function

  }
  function sendMessage() {
    //saving in newChatMessages because then you can 
    //make this variable be the one you make the copy of for the setChatMessages below
    //==>This is better because if you make a copy of the same variable for both then the html won't update everything because 
    //setChatMessages only updates once at the end. So after the second setChatMessages, it will have the updated
    //list from the newChatMessages variable you created
    const newChatMessages = [
      ...chatMessages, //spread operator(...) takes values in array and copies values into a new array
      //the comma adds it to the end of the copy. and setChatMessages puts whatever is in the parenthesis as the new array value/data
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessages)


    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, //"," is the spread operator(...) takes values in array and copies values into a new array
      //the comma adds it to the end of the copy. and setChatMessages puts whatever is in the parenthesis as the new array value/data
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])


    setInputText('')//updates inputText to be empty, but this doesn't direclty update the html ==> only things in return do that so that's why you do value={}
  }
  return (
    // below is the same as <input> </input>
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}//every time you change the text it will run the function, which runs setInputText, which updates inputText
        value={inputText}//the value prop forces a value on the input element
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"//className not class like regular css
      >Send</button>
    </div>
  )
}
