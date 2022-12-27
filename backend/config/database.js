const mongoose = require('mongoose');

// Conneting with database
const connectDatabase = ()=>{
mongoose.connect(process.env.MONGO_URI) 

.then(con =>{
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
})

}


module.exports = connectDatabase;