const { Router } = require("express")
const router = Router()
const {
  validarWJT,
  esAdminRole,
  tieneRole
} = require("../middlewares")

const {cafesGet, cafesPost, cafesGetDetail, cafesUpdate, cafesDelete} = require('../controladores/cafes')
const { generarJWT } = require("../helpers/generar-jwt")

router.get('/',cafesGet)
router.get('/:id', cafesGetDetail)
router.post('/', cafesPost)
router.put('/:id', cafesUpdate)
router.delete('/:id',generarJWT, esAdminRole,  cafesDelete)

module.exports = router
