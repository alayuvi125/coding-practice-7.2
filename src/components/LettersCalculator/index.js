// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: '', count: 0}

  onChangeInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {textInput, count} = this.state
    console.log(textInput)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="textField" className="paragraph">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-field"
            onChange={this.onChangeInput}
            value={textInput.textContent}
            id="textField"
          />
          <p className="letters-count-line">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
