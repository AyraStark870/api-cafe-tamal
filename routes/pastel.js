const { Router } = require("express")
const router = Router()

const {pastelesGet, pastelesPost, pastelesGetDetail, pastelesUpdate, pastelesDelete} = require('../controladores/pasteles')

router.get('/', pastelesGet)
router.get('/:id', pastelesGetDetail)
router.post('/', pastelesPost)
router.put('/:id', pastelesUpdate)
router.delete('/:id', pastelesDelete)

module.exports = router
