const { Router } = require("express")
const router = Router()
const { check } = require("express-validator")
const { login } = require("../controladores/auth")
const { validarCampos } = require("../middlewares/validar-campo")

router.post("/",[
  check("email", "el correo es obligatorio").isEmail(),
  check("password", "el password es obligatorio").not().isEmpty(),
  validarCampos
], login)

module.exports = router;
