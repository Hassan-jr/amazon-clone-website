import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../components/Homeproduct.css"

import dataservice from '../features/alldata'
import Nodata from './nodata'

function Homeproduct() {

    const [Electronic, setdata] = useState([])
    useEffect (async () =>{
        const data2 = await dataservice.getShoesData()
    // const data2 = await dataservice.getElectronicsData()
    
    
    setdata(data2)
    },[])
      

  return (
      <div className="home">
   {Electronic && Electronic.length ? 
 <div>
   <div className='homeproduct-main-container'>
    {/* LINE ONE */}
    
    {/* ONE */}
    <div className='homeproduct-container'>
        <h2>Sneaker Items</h2>
     <div>
         <img src={Electronic[0].image} alt="Homeproducts" />
         <img src={Electronic[1].image} alt="Homeproducts" />
         <img src={Electronic[2].image} alt="Homeproducts" />
         <img src={Electronic[3].image} alt="Homeproducts" />
     </div>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* two */}
    <div className='homeproduct-container'>
        <h2>Shop by Category</h2>
     <div>
         <img src={Electronic[4].image} alt="Homeproducts" />
         <img src={Electronic[5].image} alt="Homeproducts" />
         <img src={Electronic[6].image} alt="Homeproducts" />
         <img src={Electronic[7].image} alt="Homeproducts" />
     </div>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* three */}
    <div className='homeproduct-container'>
        <h2>Sneakers accessories</h2>
     <div>
         <img src={Electronic[8].image} alt="Homeproducts" />
         <img src={Electronic[9].image} alt="Homeproducts" />
         <img src={Electronic[10].image} alt="Homeproducts" />
         <img src={Electronic[11].image} alt="Homeproducts" />
     </div>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* four */}
    <div className='homeproduct-container'>
        <h2>{Electronic[0].categories}</h2>
     <div>
         <img src={Electronic[12].image} alt="Homeproducts" />
         <img src={Electronic[13].image} alt="Homeproducts" />
         <img src={Electronic[14].image} alt="Homeproducts" />
         <img src={Electronic[15].image} alt="Homeproducts" />
     </div>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>
     </div>
    {/* second line */}

    {/* one */}
    <div  className='homeproduct-main-container'>
    <div className='homeproduct-container22'>
        <h2>Shoes and Sneakers</h2>
     <img src={Electronic[16].image} alt="Homeproducts" />
     <p>$ {Electronic[16].price}</p>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* two */}
    <div className='homeproduct-container22'>
        <h2>Todays Deals</h2>
     <img src={Electronic[17].image} alt="Homeproducts" />
     <p>$ {Electronic[17].price}</p>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* three */}
    <div className='homeproduct-container22'>
        <h2>AmazonBasics</h2>
     <img src={Electronic[23].image} alt="Homeproducts" />
     <p>$ {Electronic[23].price}</p>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>
    </div>

    {/* four */}
    <div className='homeproduct-container22'>
        <h2>Sneaker</h2>
     <img src={Electronic[20].image} alt="Homeproducts" />
     <p>$ {Electronic[20].price}</p>
     <Link to="/products"  style={{ textDecoration: 'none' }}>See more</Link>

    </div>
    
 </div>
 </div>
 :
 <Nodata/>
   }
  
   </div>
  )
}

export default Homeproduct