import React from 'react'
import { useState } from 'react'
import './Cartitems.css'
import {  useDispatch } from 'react-redux'
import {removeCart} from '../features/cart'

function Cartitems(prop) {

    const [qty, setQty] = useState(1)
function Handlechange(e){
  setQty(e.target.value)
}

const dispatch = useDispatch()
function deleteitem (){
       dispatch(removeCart(prop))
}

  return (
    
       <div className = 'cartpage'> 
        {/* cartimg */}
        <div className = 'cartimg'>
           <img className='imgcart' src={prop.image} alt={prop.title} />
        </div>
        
        {/* cartdes */}
        <div className = 'cartdes'>

            {/* cart_title */}
      <div>
            <p className='text'>{prop.title}</p>
            <p>{prop.stock_info}</p>

         <p className='align'>Qty : &nbsp; 
            <select
             Name="qty"
             value={qty}
             onChange={Handlechange}
            >
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
            &nbsp;&nbsp; | &nbsp; &nbsp; <span onClick={deleteitem}>Delete</span>
       </p>
       
            </div>

            {/* cartprice */}
            <div className = 'cartprice'>
               <p>$ {prop.price * qty}</p>
            </div>

        </div>

  </div>
    
  )
}

export default Cartitems