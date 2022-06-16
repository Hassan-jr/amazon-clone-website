import React from 'react'
import './DetailedCard2.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Btn from "./btn"
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import {addCart} from '../features/cart'


function DetailedCard2(prop)
{
      //  add to cart
      const dispatch = useDispatch()
      
      function addtocart(){
           dispatch (addCart(prop))
           
      }

    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const today =     date.getDate()
    const month = months[date.getMonth()]

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


      // <hr/>
      const ColoredLine = () => (
        <hr
            style={{
                color: "black",
                backgroundColor: 'black',
                height: 1
            }}
        />
    );

  return (
    <div className = 'card_container'>

      {/* PART 1 */}
        {/* cardimg */}
      <div className="cardpics">
       <p>{prop.categories}</p> 
        <Slider {...settings}>
          {prop.images.map((img, index)=><img className="cardpic" key = {index} src= {img} alt={img}/>)}
        </Slider>
      </div>

     {/* PART 2 */}
        {/* card description */}
       <div className = 'card_details'>
          <h4>{prop.title}</h4>
         <div className='card_details_header, lineHieght'>
            <a href={prop.url_requested}>visit {prop.seller} store</a>
            <p >
             <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <span>{prop.reviews * 45} ratings   |   {prop.reviews * 5} answerd questions </span>
            </p>
            <p>Brand:  {prop.brand}</p>
            <ColoredLine  />
         </div>
               {/* price */}
         <div className="lineHieght">
                <span><span>Price : </span><span className="price">${prop.price}</span></span>
                <p>${Math.floor (prop.price * 3.4) } Shipping & Import Fees Deposit</p>
                <p> <span className="card_list">Color : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>   <span>{prop.colour}</span></p>
                <p> <span className="card_list"> Item item_weighet : &nbsp; &nbsp; &nbsp; </span>  <span>{prop.item_weight}</span></p>
                <p> <span className="card_list">Package quantity: &nbsp; &nbsp; &nbsp; </span>  <span>{prop.quantity}</span></p>
                <p> <span className="card_list">Brand :  &nbsp; &nbsp; &nbsp; </span><span>{prop.brand}</span></p>
                <ColoredLine  />  
         </div>
                
         <h4>About This Item</h4>
          <p>{prop.description}</p> 
       </div>


      {/* PART 3 */}
       {/* card buy or cart */}
       <div className = ' card_price'>

       <span><span>Price : </span><span className="price">${prop.price}</span></span>
       <p>${Math.floor (prop.price * 3.4) } Shipping & Import Fees Deposit</p>
       <p>Delevery On <span className='price'>{month} {today} Order Within <span className='price'>10 hrs 48 mins</span></span> </p>
       <p className='align'> <LocationOnOutlinedIcon/> Delivered to Your Location</p> 
       <p className='price'>{prop.stock_info}</p>

        <p>Qty : &nbsp; 

       <select>
        <option value="1" key="1">1</option>
        <option value="2" key="2">2</option>
        <option value="3" key="3">3</option>
        <option value="4" key="4">4</option>
        <option value="5" key="5">5</option>
        <option value="6" key="6">6</option>
        <option value="7" key="7">7</option>
        <option value="8" key="8">8</option>
        <option value="7" key="7">7</option>
        <option value="8" key="8">8</option>
       </select>
       </p>

        <div onClick={addtocart}>
        <Btn title = "Add to Cart "/>
        </div>
       
       <Btn title = "Buy Now "/>
       
       <p className="align"><LockIcon/> Secure transaction</p>

       <p >Shipped From &nbsp; &nbsp;  <span className="align2" >Amazon</span></p>
       <p >Sold by   &nbsp; &nbsp; &nbsp; &nbsp;    <span className="align2">{prop.seller}</span></p>
       <p><span>Return policy: </span><span className = "align2">Eligible for Return, Refund or Replacement within 30 days of receipt </span></p>
  
       </div>
       
    </div>
  )
}

export default DetailedCard2