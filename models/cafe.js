const mongoose = require("mongoose");



const { Schema, model } = mongoose;

const CafesSchema = new Schema({
  name: {
    type: String,
    required:true,
    trim: true,
    maxlength: 20,
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

//crear metodos personalizados

// UsuariosSchema.methods.toJSON = function (){
//   const { __v, password,_id,...cafe} = this.toObject()//sacar la version y el password
//   usuario.uid = _id
//   return cafe
// }
module.exports = model("Cafe", CafesSchema)
