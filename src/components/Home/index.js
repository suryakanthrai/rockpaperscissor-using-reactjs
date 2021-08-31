import {Component} from 'react'
import Buttonscontainingimages from '../Buttonscontainingimages'
import Gameresult from '../Gameresult'

import './index.css'

class Home extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state
    const {id, image} = apponentChoice
    return (
      <Gameresult
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  getButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  getImages = () => {
    const {choicesList} = this.props

    return (
      <ul className="images-container">
        {choicesList.map(eachItem => (
          <Buttonscontainingimages
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.getButtonId}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <div className="app-container">
        <div className="score-container">
          <div>
            <h1 className="heading">
              ROCK <br />
              PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="score-card-container">
            <p className="score-description">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {showResult ? this.onGetResult() : this.getImages()}
      </div>
    )
  }
}

export default Home
