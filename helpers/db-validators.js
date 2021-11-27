const Role = require('../models/roles')
const Usuario = require('../models/usuario')

const esRolValido = async (rol = '') => {
  const existeRol = await Role.findOne({ rol })

  if (!existeRol) {
    throw new Error(`el rol ${rol} no esta registrado en la DB`)
  }
}

const emailExiste = async (email = "") =>{

  const existeEmail = await Usuario.findOne({ email })
  if (existeEmail) {
    throw new Error("el correo ya esta registrado")
  }
 }

const existeUsuarioPorId = async ( id ) =>{

  const existeUsuario = await Usuario.findById(id)
  if (!existeUsuario) {
    throw new Error("el id no existe")
  }
 }

module.exports = {
  esRolValido,
  emailExiste,
  existeUsuarioPorId
}