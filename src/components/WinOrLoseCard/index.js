// Write your code here.
import './index.css'

const WinOrLose = props => {
  const {score, playAgain} = props

  const onPlayGame = () => {
    playAgain(score)
  }

  return (
    <div className="results-image-cnt">
      {score === 12 ? (
        <>
          <div className="results">
            <h1 className="WLhead">You Won</h1>
            <div className="scores-button-cnt">
              <p className="result-score">Best Score</p>
              <p className="result-wL">{score}/12</p>
              <button
                type="button"
                className="playagain-btn"
                onClick={onPlayGame}
              >
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="lose-img"
            alt="win or lose"
          />
        </>
      ) : (
        <>
          <div className="results">
            <h1 className="WLhead">You Lose</h1>
            <div className="scores-button-cnt">
              <p className="result-score">Score</p>
              <p className="result-wL">{score}/12</p>
              <button
                type="button"
                className="playagain-btn"
                onClick={onPlayGame}
              >
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="lose-img"
            alt="win or lose"
          />
        </>
      )}
    </div>
  )
}
export default WinOrLose
