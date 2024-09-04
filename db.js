const { default: mongoose } = require('mongoose');
// import mongoose from "mongoose";
const mongoos = require('mongoose');
// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // i create a database name of hotels

mongoose.connect(mongoURL,{
   useNewUrlParser:true
    // useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB');
});
db.on('error',(err)=>{
    console.error(`MongoDB conncstion error${err}`);
});
db.on('Disconnected',()=>{
    console.log('MongoDB Disconnected');
});
module.exports = db;