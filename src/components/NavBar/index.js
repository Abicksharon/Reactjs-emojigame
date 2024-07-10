// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topscore, gamepage} = props
  return (
    <>
      <nav>
        <div className="navbar">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-head">Emoji Game</h1>
        </div>
        <div className="scores">
          {gamepage && score < 12 ? (
            <>
              <p className="score">Score: {score}</p>
              <p className="tscore">Top Score: {topscore}</p>
            </>
          ) : (
            ''
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar
