// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, updateEmojiIdList} = props
  const {emojiUrl, emojiName, id} = emojis
  const update = () => {
    updateEmojiIdList(id)
  }
  return (
    <li>
      <button type="button" className="emoji-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-img"
          onClick={update}
        />
      </button>
    </li>
  )
}

export default EmojiCard
