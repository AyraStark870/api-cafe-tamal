

const  validarCampos = require('../middlewares/validar-campo')
const  validarWJT = require("../middlewares/validar-jwt")
const  validarRoles = require("../middlewares/validar-roles")

module.exports = {
  ...validarCampos,
  ...validarWJT,
  ...validarRoles,
}