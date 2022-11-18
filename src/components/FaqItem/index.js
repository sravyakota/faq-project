import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onPlusOrMinus = () => {
    console.log('clicked')
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem
    let result
    if (isActive) {
      result = (
        <>
          <hr className="h" />
          <p>{answerText}</p>
        </>
      )
    }
    return result
  }

  render() {
    const {isActive} = this.state
    const {eachItem} = this.props
    const {answerText, questionText, id} = eachItem
    console.log(isActive)
    console.log(answerText)
    console.log(id)

    const img = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    // const para = isActive ? answerText : null
    // const hr = isActive ? 'h' : ''
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="eachFaqItem">
        <div className="ques">
          <h1 className="paraQuestion">{questionText}</h1>
          <button type="button" className="bb" onClick={this.onPlusOrMinus}>
            <img src={img} alt={altText} className="icons" />
          </button>
        </div>
        {isActive ? this.renderAnswer() : null}
      </li>
    )
  }
}

export default FaqItem
