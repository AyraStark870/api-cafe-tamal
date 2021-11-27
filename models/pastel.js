const mongoose = require("mongoose");



const { Schema, model } = mongoose;

const PastelesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 1,
  },
  desc: {
    type: String,
    trim: true,
    maxlength: 2000,
    minlength: 5,
  },
  img: {
    type: String,
  },
  price: {
    type: String,
    //required: [true, "el precio es obligatorio"],
  },

});






module.exports = model("Pastel", PastelesSchema)
