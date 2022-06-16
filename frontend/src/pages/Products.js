import React, { useEffect, useState } from 'react'
import Dataservice from '../features/alldata'
import Card from '../components/card'



function Products() {

  const [data, setdata] = useState([])
useEffect (async () =>{
const data1 = await Dataservice.getAccessoriesData()
const data2 = await Dataservice.getElectronicsData()
const data3 = await Dataservice.getPhonesData()
const data4 = await Dataservice.getShoesData()

setdata(prev => [...prev, ...data4,...data2, ...data3, ...data1])
},[])
  

      
 

  return (
    <div className="allcards">
      
      {data.map((item, index) =>
          <Card key = {index} {...item}  />
      )}
    </div>
  )
}

export default Products