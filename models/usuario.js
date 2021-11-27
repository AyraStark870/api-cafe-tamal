const mongoose = require("mongoose");



const { Schema, model } = mongoose;

const UsuariosSchema = new Schema({
  name: {
    type: String,
    required: [true, "el nombre es obligatorio"],
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  rol: {
    type: String,
    default: "USER_ROLE",
    emun: ["ADMIN_ROLE", "USER_ROLE"]
  },
  password: {
    type: String,
    required: [true, "el password es obligatorio"],
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "el correo es obligatorio"],
    unique:true,
  },
});

//crear metodos personalizados

// UsuariosSchema.methods.toJSON = function (){
//   const { __v, password,_id,...usuario} = this.toObject()//sacar la version y el password
//   usuario.uid = _id
//   return usuario
// }

module.exports = model("Usuario", UsuariosSchema)
