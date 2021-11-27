const { Router } = require("express")
const router = Router()
const {
  validarWJT,
  esAdminRole,
  tieneRole
} = require("../middlewares")

const {cafesGet, cafesPost, cafesGetDetail, cafesUpdate, cafesDelete} = require('../controladores/cafes')

router.get('/', validarWJT, cafesGet)
router.get('/:id', cafesGetDetail)
router.post('/', cafesPost)
router.put('/:id', cafesUpdate)
router.delete('/:id', validarWJT, esAdminRole, cafesDelete)

module.exports = router
