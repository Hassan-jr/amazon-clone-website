import axios from 'axios'

const API_URL = '/home'

// Accessories
const getAccessoriesData =async () => {
   try {
    const response =   await axios.get(API_URL + "accessories")
    return  response.data
       
   } catch (error) {
         console.log(error);
   }
}

// Electronics
const getElectronicsData =async () => {
  try {
   const response =   await axios.get(API_URL +"electronics")
   return  response.data
      
  } catch (error) {
        console.log(error);
  }
}

// Phones
const getPhonesData =async () => {
      try {
       const response =   await axios.get(API_URL +"phones")
       return  response.data
          
      } catch (error) {
            console.log(error);
      }
    }

    
    // shoes
const getShoesData =async () => {
      try {
       const response =   await axios.get(API_URL + "shoes")
       return  response.data
          
      } catch (error) {
            console.log(error);
      }
    }
    



  const dataservice = {
       getAccessoriesData,
       getElectronicsData,
       getPhonesData,
       getShoesData
  }
  export default dataservice;