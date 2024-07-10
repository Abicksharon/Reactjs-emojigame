/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emojiIdList: [],
    gamepage: true,
    topscore: 0,
  }

  updateEmojiIdList = id => {
    this.setState(prevstate => {
      const {emojiIdList} = prevstate
      if (emojiIdList.includes(id)) {
        return {gamepage: false}
      }
      return {emojiIdList: [...emojiIdList, id]}
    })
  }

  playAgain = score => {
    this.setState(prevState => {
      const {topscore} = prevState
      return {
        gamepage: true,
        emojiIdList: [],
        topscore: Math.max(topscore, score),
      }
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojiIdList, gamepage, topscore} = this.state
    const emojisList = this.shuffledEmojisList()
    const score = emojiIdList.length

    return (
      <div className="emoji-game">
        <NavBar score={score} topscore={topscore} gamepage={gamepage} />
        <div className="game-container">
          {console.log(score)}
          {gamepage && score < 12 ? (
            <ul className="emojis">
              {emojisList.map(eachemoji => (
                <EmojiCard
                  emojis={eachemoji}
                  key={eachemoji.id}
                  updateEmojiIdList={this.updateEmojiIdList}
                />
              ))}
            </ul>
          ) : (
            <WinOrLose score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
