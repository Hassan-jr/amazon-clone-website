// using mongodb only with no mongoose

const { getDb, connectToDb } = require('../config/db2')

// db connection
let db

connectToDb((err) => {
  if(!err){
   
    db = getDb()
  }
})





// get for all electronics
const getelectronics =   (req, res )=> {

  let data = []

  db.collection('Electronic')
    .find()
    .sort({author: 1})
    .forEach(onedata => data.push(onedata))
    .then(() => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
}

// get for all phones
const getphones =  (req, res )=> {

  let data = []

  db.collection('Phones')
    .find()
    .sort({author: 1})
    .forEach(onedata => data.push(onedata))
    .then(() => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
}

// get for all shoes
const getshoes =  (req, res )=> {
   
  let data = []

  db.collection('Shoes')
    .find()
    .sort({author: 1})
    .forEach(onedata => data.push(onedata))
    .then(() => {
  
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
}


// get for all Accessories
const getaccessories=  (req, res )=> {
  let data = []

  db.collection('Accessories')
    .find()
    .sort({author: 1})
    .forEach(onedata => data.push(onedata))
    .then(() => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
}


module.exports = {
    getelectronics, 
    getphones,
    getshoes,
    getaccessories,
}