import React, { useEffect, useState } from 'react'
import "../components/Oneslide.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//import Phones from "../data/Phones"
import { Link } from 'react-router-dom';
import dataservice from '../features/alldata';


function Oneslide(prop) {

  const [Phones, setPhones] = useState([])
  const [Shoes, setShoes] = useState([])

useEffect (async () =>{
const data4 = await dataservice.getShoesData()
const data3 = await dataservice.getPhonesData()

setPhones(data3)
setShoes(data4)
},[])

// windows diamentions
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
var size ;
var num = getWindowDimensions();
if (num.width < 700)
{
size = 4;
}else if (num.width < 600){
  size = 2;
}else{
  size = 9
}


    const settings =  {
        dots: false,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: size,
        slidesToScroll: 1,
        arrows : true,
        className: "slides1"
      };
     
  return (
    <div>
    <div className='oneslide'>
    <h2>Popular products in Wireless internationally</h2>
    {/* <Slider  {...settings}>
            {Phones.length ? Phones.map(phone=> {
                return (
                    <Link to = "/products">
                    <img className='phones' src={phone.image} alt="" />
                    </Link>
            
                )
            })
            :
            <Nodata/>
          }
       </Slider> */}
   
    </div>
{/* slides 2 */}
    <div className='oneslide'>
    <h2>New Arrivals</h2>
    <Slider  {...settings}>
            { Shoes.length &&  Shoes.map(phone=> {
                return (
                    <Link to = "/products">
                    <img className='phones' src={phone.image} alt="" />
                    </Link>
            
                )
            }  )}
       </Slider>
   
    </div>
    </div>
  )
}

export default Oneslide