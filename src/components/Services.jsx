// import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
import ServiceCard from './Servicecard'

const Services = () => {
  return (
    <div>
         <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <ServiceCard key={card.id} {...card} />)}
    </div>
    </div>
  )
}

export default Services
