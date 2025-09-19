import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner  from '../assets/Images/Banner.png'
import { Link } from 'react-router';
const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
      autoplay: true,
  };

  return (
    <>
    <section id='Banner' className='Banner w-full'>
     <div className="slider-container w-full">
      <Slider {...settings}>
        <div>
          <Link  to={'/'}>
          <img className='w-full' src={banner} alt="banner" />
          </Link>
        </div>
        <div>
          <Link to={'/'}>
          <img className='w-full' src={banner} alt="banner" />
          </Link>
        </div>
        <div>
          <Link to={'/'}>
          <img className='w-full' src={banner} alt="banner" />
          </Link>
        </div>
   
       
      </Slider>
    </div>

    </section>
    </>
  )
}

export default Banner