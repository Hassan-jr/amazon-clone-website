import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dataservice from '../features/alldata'
import DetailedCard2 from './DetailedCard2'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card'

function DetailedCard() {


  const id = useSelector ((state)=> state.card.value)

  // all data 
  const [data, setdata] = useState([])
  useEffect (async () =>{
  const data1 = await dataservice.getAccessoriesData()
  const data2 = await dataservice.getElectronicsData()
  const data3 = await dataservice.getPhonesData()
  const data4 = await dataservice.getShoesData()
  
  setdata(prev => [...prev, ...data4,...data2, ...data3, ...data1])
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
size = 1;
}else if (num.width < 600){
  size = 1;
}else{
  size = 4
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
    // css  on card.css
   <div className="products">
       { data.length ?
     data.map((item, index) =>{
      if (item._id === id){
        return (
            <DetailedCard2 key = {index} {...item} />
        )
      
       }
      })
      :
      <div className="nodata">
      <h1>Loading</h1>
      <h3>PLEASE Wait</h3>
      </div>
     }
     <h2>Related Item</h2>
     <div >
     <Slider {...settings}>
      {data.map((item, index) =>
      <div>
       <Card key = {index} {...item}  />
      </div>
          
        )}
      </Slider>
     </div>
    </div>
  )
}

export default DetailedCard