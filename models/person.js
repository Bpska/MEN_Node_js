const mongoose = require("mongoose");
// import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  name: {
    type: String,
    reruired: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["Chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true
  }
});
const person = mongoose.model('person',Schema);
module.exports=person;
// export default person;