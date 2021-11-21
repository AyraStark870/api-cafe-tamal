const { Router } = require("express")
const router = Router()

const {cafesGet, cafesPost, cafesGetDetail, cafesUpdate, cafesDelete} = require('../controladores/cafes')

router.get('/', cafesGet)
router.get('/:id', cafesGetDetail)
router.post('/', cafesPost)
router.put('/:id', cafesUpdate)
router.delete('/:id', cafesDelete)

module.exports = router
