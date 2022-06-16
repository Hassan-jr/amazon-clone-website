import React from 'react'
import "../components/Homeproducts.css"
import Homeproduct from './Homeproduct'
import Oneslide from './Oneslide'


function Homeproducts() {
  return (
    <div className='homeproducts-container'>
        <Homeproduct/>
        <Oneslide/>
        <Homeproduct/>
        <Oneslide/>
    </div>
  )
}

export default Homeproducts