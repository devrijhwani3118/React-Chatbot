import { useState} from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  //state is data connected to the html==>if we update this data it will also update the html
  const [chatMessages, setChatMessages] = useState([{
    message: 'Hello! How can I help you?',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Can you get me todays date?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'Can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is September 13th',
    sender: 'robot',
    id: 'id4'
  }])
  // array[0] ==> the first value in the array is the current data (the entire list of chat messages as default)

  // const chatMessages=array[0]
  // // array[1] second value is a function that updates this data. 
  // // Always use that function to update the data because that function tells react that the data changed and to update the html
  // //If we don't use it it wont update the html

  // const setChatMessages = array[1]
  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </div>

  );
}
export default App
