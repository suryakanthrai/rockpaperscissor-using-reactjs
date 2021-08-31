import './index.css'

const Gameresult = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div className="show-res-container">
      <div className="res-images-container">
        <div>
          <p className="res-text">YOU</p>
        </div>
        <img src={myChoice[1]} alt="your choice" className="res-image" />
        <div>
          <p className="res-text">YOU</p>
        </div>
        <img src={image} alt="opponent choice" className="res-image" />
      </div>
      <p className="res-text">{resultMessage}</p>

      <div className="res-btn-container">
        <button
          type="button"
          className="button-sty"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Gameresult
