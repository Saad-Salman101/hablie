// import React from 'react'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {  softwareServices } from '../constants'
import ServiceCard from './Servicecard'
import Slider from 'react-slick';

const ServicesHardware = () => {
  const settings = {
    // Similar settings as before
    slidesToShow: 2, // Show only one slide at a time for a more 3D effect
    arrows: false, // Hide default arrows to mimic UI Initiative's style
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Adjust autoplay speed (optional)
      dots: true, // Enable pagination dots
    infinite: true, // Enable infinite loop
    rtl: true,
  };
  return (
    <div>
            <div className=' w-full text-left text-white text-[30px] font-bold'> Hardware</div>
         <Slider {...settings} className="flex flex-row  justify-start align-start w-full  relative z-[10]">
      {softwareServices.map((card, index) => <ServiceCard key={index} {...card} />)}
    </Slider>
    </div>
  )
}

export default ServicesHardware
