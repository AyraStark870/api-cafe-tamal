const { Router } = require("express")
const router = Router()

const {tamalesGet, tamalesPost, tamalesGetDetail, tamalesUpdate, tamalesDelete} = require('../controladores/tamales')

router.get('/', tamalesGet)
router.get('/:id', tamalesGetDetail)
router.post('/', tamalesPost)
router.put('/:id', tamalesUpdate)
router.delete('/:id', tamalesDelete)

module.exports = router
