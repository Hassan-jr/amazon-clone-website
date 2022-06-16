import React from 'react'
import Cartitems from '../components/Cartitems'
import './MyCart.css'
import {useSelector} from 'react-redux'
import Btn from "../components/btn"

function MyCart() {

    const {value} = useSelector (state=> state.cart);
    const arr = [];
    value.map(item=> arr.push(item.price))

   const  total =  arr.reduce(sum, 0)
    
    function sum (num, t){
        
        
        return num + t;
    }
 // <hr/>
 const ColoredLine = () => (
    <hr
        style={{
            color: "black",
            backgroundColor: 'black',
            height: 1
        }}
    />)
  return (
 <div className="mainCart">
        
    {/* cartitems */}
    <div className="cartitems">
        <div className='shoppincart_price'>
        <h2>Shopping Cart</h2>
        <p>price</p>
        </div>
        
        <ColoredLine/>

       { value.length ?
       value.map((item,index)=>
        <div className='cartitems_map'>
       <Cartitems key= {index} {...item}/>
       <ColoredLine/>
       
        </div>
         )
         : 
         <div>
            <h2>No Items In Your Cart</h2>
         </div>
        }
         <p className='subtotal_bottom'> Subtotal ({value.length} item): $ {total}</p>
    </div>

    {/* subtotal */}
      <div className = 'subtotal'>
          <p className='text'> Subtotal ({value.length} item): $ {total}</p>
          <Btn title = "Proceed to Checkout" />
      </div>

 </div>
  )
}

export default MyCart