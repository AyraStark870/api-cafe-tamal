const mongoose = require("mongoose");



const { Schema, model } = mongoose;

const TamalesSchema = new Schema({
  name: {
    type: String,
    required:true,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  img: {
    type: String,
  },
  price: {
    type: String,
    required: true
  },
  size: {
    type: String,
  }

});


module.exports = model("Tamal", TamalesSchema)
