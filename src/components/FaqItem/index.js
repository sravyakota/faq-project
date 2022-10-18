import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onPlusOrMinus = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {eachItem} = this.props
    const {answerText, questionText} = eachItem
    console.log(isActive)

    const img = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const text = isActive ? {answerText} : ''
    const hr = isActive ? 'h' : 'hh'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="eachFaqItem">
        <div className="ques">
          <h1 className="paraQuestion">{questionText}</h1>
          <button type="button" className="bb" onClick={this.onPlusOrMinus}>
            <img src={img} alt={altText} className="icons" />
          </button>
        </div>
        <div className="nameTxt-container">
          <hr className={hr} />
          <p>{text}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
