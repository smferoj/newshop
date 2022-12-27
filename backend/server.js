const app = require('./app');
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');
// Handle Unchaught exceptions

process.on('uncaughtException', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log(`Shuttin down server due to unchaught exceptions`);
    process.exit(1)
})
// Setting up config file 
dotenv.config({path:'config/config.env'})
 

// connecting to Database
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
// Handle Unhandle Promise rejections
process.on('unhandledRejection', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to unhandle promise rejection');
    server.close(()=>{
        process.exit(1)
    })
})



