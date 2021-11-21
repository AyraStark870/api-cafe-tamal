const { Router } = require("express")
const router = Router()

const {atolesGet, atolesPost, atolesGetDetail, atolesUpdate, atolesDelete} = require('../controladores/atoles')

router.get('/', atolesGet)
router.get('/:id', atolesGetDetail)
router.post('/', atolesPost)
router.put('/:id', atolesUpdate)
router.delete('/:id', atolesDelete)

module.exports = router
