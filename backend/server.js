const path = require('path');
const express = require('express')
const dotenv = require('dotenv').config()
// const connect = require('./config/db')
const cors = require('cors')

//  connect();

const app = express()
app.use (express.json())
app.use(cors())
app.use (express.urlencoded({extended: false}))
//const port = process.env.PORT || 4000


app.use('/', require('./Routes/homeroute') )

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }



app.listen (process.env.PORT || 443 , ()=>{
    console.log('listening on port');
})