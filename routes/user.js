const { Router } = require("express")
const router = Router()
const { check } = require("express-validator")
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut } = require("../controladores/usuarios")


const {
  validarCampos,
  validarWJT,
  esAdminRole,
  tieneRole
} = require("../middlewares")

const { esRolValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators")


router.get("/", usuariosGet)

router.post("/", [
  check("name", "el nombre es obligatorio").not().isEmpty(),
  check("password", "el password es obligatorio y debe tener mas de seis letras").isLength( { min:6 }),
  check("email", "el correo no es valido").isEmail(),
  check("rol", "no es un rol permitido").isIn('ADMIN_ROLE', 'USER_ROLE'),
  check('email').custom(emailExiste),

 // check('rol').custom(esRolValido),
  validarCampos//si este middleware pasa entonces ejecuta el controlador, (por eso el next)
],usuariosPost)

router.put("/:id", [

  check("id", "no es un Id valido").isMongoId(),
  check("id").custom(existeUsuarioPorId),
  check('rol').custom(esRolValido),
  validarCampos
],usuariosPut)

router.delete("/:id",[
  // validarWJT,
 //  esAdminRole,
  //tieneRole("ADMIN_ROLE"),
  //check("id", "no es un Id valido").isMongoId(),
  //check("id").custom(existeUsuarioPorId),
] ,usuariosDelete)

router.patch("/", usuariosPatch)

module.exports = router

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIiLCJpYXQiOjE2Mzc5NTk2MDUsImV4cCI6MTYzNzk3NDAwNX0.DbqG1gXsrifnc5E5nI3Zjf0vyTDzOGTvbrEuz74RGDQ