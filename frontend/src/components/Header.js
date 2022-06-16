import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Header.css";
// images
import Image1 from "../img/header1.jpg"
import Image2 from "../img/header2.jpg"
import Image3 from "../img/header3.jpg"
import Image4 from "../img/header4.jpg"


function Header() {
    const settings =  {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        className: "slides"
      };
  return (
    <div className='headerslide'>
        
     <Slider {...settings}>
     <img  className='imghaderslide' src= {Image1} alt=" image1"/>
      <img className='imghaderslide' src= {Image2} alt="an image2"/>
      <img className='imghaderslide' src= {Image4} alt="an image3"/>
      <img className='imghaderslide' src= {Image3} alt="an image4"/>
     
    </Slider>

    </div>
  )
}

export default Header