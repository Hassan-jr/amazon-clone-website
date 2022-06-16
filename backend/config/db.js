const mongoose = require('mongoose');

const connect = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(conn.db);

        // try
          
       // conn.on('error', console.error.bind(console, 'connection error:'));
//conn.once('open', function () {
//   conn.db.collection(" collection", function(err, collection){
//     collection.find({}).toArray(function(err, data){
//       console.log(data); // data printed in console
//     })
//   });
//});


        //end

        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}




module.exports = connect;