import React from 'react'
import './card.css'
import {  useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import {add} from "../features/detailRedux"
import {  useDispatch } from 'react-redux'

function Card(prop) {

 var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const date = new Date();
 const today =     date.getDate()
 const month = months[date.getMonth()]

 // navigate and dispatch
 const navigate = useNavigate()
 const dispatch = useDispatch()

function handleClick (){
dispatch (add(prop._id))
   navigate ('/detaiedCard')

}


  return (
   <div className="mainCard" onClick = {handleClick}>

    {/* IMAGE */}
    <div className = 'imgDiv'>
       <img className='cardimg' src={prop.image} alt="" />
    </div>

    {/* writings */}
    <div className='cardDes'>
      <p>{prop.title}</p>

      <div className='carddes2'>
      <p className='star_p'>
      <StarIcon className='star'/>
     <StarIcon className='star'/>
     <StarIcon className='star'/>
     <StarIcon className='star'/>
     <StarIcon className='star'/>
     <span>{prop.reviews * 15}</span>
     </p>
     
     <p > <span className='price'>${prop.price}  </span>  <span>{prop.customer_reviews}</span>  </p>

     <p>Get it as soon as <span className='price'>{month} {today}</span> </p>
     <p><span className='price'>${prop.price * 2}  </span> shipping</p>
      </div>
    </div>
   </div>
  )
}

export default Card