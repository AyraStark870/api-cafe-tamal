let mongoose = require('mongoose');
const { Schema, model } = mongoose;

const rolesSchema = new Schema({
   rol: {
     type: String,
     required: [true, 'el rol es obligatorio']
   }
});

module.exports = model("Role", rolesSchema)