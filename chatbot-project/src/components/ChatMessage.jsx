import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {//can also do ({message, sender})==>destructuring parameter diretly at the top
  // const message = props.message 
  // const sender = props.sender 
  // const {message, sender} = props;//same things/shortcut as the above code
  // ==> called destructuring. Saves the message and sender properties out
  //of the props object and saves it in a message and sender variable


  return (
    <div className={sender === 'user'
      ? 'chat-message-user'
      : 'chat-message-robot'}>
      {sender === "robot" ?
        <>
          <img src={RobotProfileImage} className="chat-message-profile" />
          <div className="chat-message-text">
            {message}
          </div>
        </>
        :
        <>
          <div className="chat-message-text">
            {message}
          </div>
          <img src={UserProfileImage} className="chat-message-profile" />
        </>

      }

    </div>
  )
}
