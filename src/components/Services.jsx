// import React from 'react'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { softwareServices } from '../constants'
// import FeedbackCard from './FeedbackCard'
import ServiceCard from './Servicecard'
import Slider from 'react-slick';

const Services = () => {
  const settings = {
    slidesToShow: 2, // Always show only one slide
    arrows: false, // Hide default arrows
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite loop

    // Responsive settings for mobile devices
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed for your mobile view
        settings: {
          slidesToShow: 1, // Ensure one slide on mobile
        },
      },
    ],
  };
  return (
    <div>
      <div className=' w-full text-left text-white text-[30px] font-bold'> Software</div>
         <Slider {...settings} className="flex flex-row  justify-start align-start w-full  relative z-[10]">
      {softwareServices.map((card, index) => <ServiceCard key={index} {...card} />)}
    </Slider>
    </div>
  )
}

export default Services
