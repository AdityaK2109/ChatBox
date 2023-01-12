import './index.css'
import {AiOutlineLike} from 'react-icons/ai'

const EachMessage = props => {
  const {eachMessage, onClickLikeBtn} = props
  const {id, userName, message, likesCount, time} = eachMessage

  const onClickLikeButton = () => {
    onClickLikeBtn(id)
  }

  const numberOfUser = 5

  const userRandomIconBackgroundColor = Math.floor(Math.random() * numberOfUser)
  console.log(`user-icon background${userRandomIconBackgroundColor}`)
  return (
    <li className="each-msg-container">
      <div className={`user-icon background${userRandomIconBackgroundColor}`}>
        {userName[0]}
      </div>
      <div className="message-and-like-button-container">
        <div className="name-and-time-container">
          <h1 className="username-text">{userName}</h1>
          <p className="time-text">{time}</p>
        </div>
        <div className="message-container">
          <p className="message-text">{message}</p>
        </div>
        <div className="like-button-and-count-container">
          <button
            className="like-button"
            type="button"
            onClick={onClickLikeButton}
          >
            <AiOutlineLike size="18" color="#0066ff" />
          </button>
          <p className="like-count-text">
            {likesCount === 0 ? '' : likesCount}
          </p>
        </div>
      </div>
    </li>
  )
}

export default EachMessage
