import './index.css'
import {Component} from 'react'
import {BsEmojiSmile} from 'react-icons/bs'
import {MdSend} from 'react-icons/md'
import Header from '../Header'
import EachMessage from '../EachMessage'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

class ChatPage extends Component {
  state = {msgTyped: '', msgList: []}

  onChangeMsgText = event => {
    this.setState({msgTyped: event.target.value})
  }

  onClickSendMsgButton = () => {
    const {msgList, msgTyped} = this.state
    const previousMsgId = msgList.length
    const currentTime = new Date()
    const newMsgObj = {
      id: previousMsgId + 1,
      userName: userList[Math.floor(Math.random() * userList.length)],
      message: msgTyped,
      likesCount: 0,
      time: `${currentTime.getHours()} : ${
        currentTime.getMinutes().length === 1
          ? `0 + ${currentTime.getMinutes()}`
          : currentTime.getMinutes()
      }`,
    }

    if (msgTyped.trim() !== '') {
      this.setState(prevState => ({
        msgList: [...prevState.msgList, newMsgObj],
        msgTyped: '',
      }))
    }
  }

  onClickLikeBtn = id => {
    this.setState(prevState => ({
      msgList: prevState.msgList.map(eachMessage => {
        if (eachMessage.id === id) {
          const likesCount = eachMessage.likesCount + 1
          return {...eachMessage, likesCount}
        }
        return eachMessage
      }),
    }))
  }

  render() {
    const {msgTyped, msgList} = this.state
    console.log(msgList)

    const renderMessageList = () => (
      <ul className="message-list-container">
        {msgList.map(eachMessage => (
          <EachMessage
            key={eachMessage.id}
            onClickLikeBtn={this.onClickLikeBtn}
            eachMessage={eachMessage}
          />
        ))}
      </ul>
    )

    const renderTextInputAndSendButton = () => (
      <div className="input-msg-text-and-send-button-container">
        <div className="input-msg-text-container">
          <input
            type="text"
            placeholder="Type a message"
            value={msgTyped}
            className="input-msg-bar"
            onChange={this.onChangeMsgText}
          />
          <button type="button" className="emoji-button">
            <BsEmojiSmile color="0066ff" size="20" />
          </button>
        </div>
        <button
          type="button"
          className="send-msg-button"
          onClick={this.onClickSendMsgButton}
        >
          <MdSend size="20" color="#ffffff" />
        </button>
      </div>
    )

    return (
      <div className="page-container">
        <Header />
        <div className="chat-box-container">
          {renderMessageList()}
          {renderTextInputAndSendButton()}
        </div>
      </div>
    )
  }
}

export default ChatPage
