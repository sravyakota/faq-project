import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-bg-container">
      <ul className="faqs-container">
        <h1 className="heading">FAQs</h1>
        {faqsList.map(eachFaq => (
          <FaqItem eachItem={eachFaq} key={eachFaq.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
