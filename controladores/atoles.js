const { response, request } = require("express")
const Atol = require('../models/atol')


const atolesGet = async (req = request, res = response) => {

  const atol = await Atol.find()


  res.status(201).json({atol})
}
const atolesGetDetail = async (req = request, res = response) => {
  const { id } = req.params
  const atol = await Atol.findById(id)


  res.status(201).json({atol})
}
const atolesPost = async (req, res = response) => {

  const atol = new Atol(req.body)
  await atol.save()

  res.json({
   atol
  })
}

const atolesUpdate = async (req, res, next) => {
  const { id } = req.params
  const newData = req.body

  const atolActualizado = await Atol.findByIdAndUpdate(id, newData, { new: true })
  res.json(atolActualizado)

}
const  atolesDelete = async (req, res = response) => {
  const { id } = req.params

  const atol = await Atol.findByIdAndDelete(id)

  res.status(201).json({ atol })
}

module.exports = {
    atolesGet,
    atolesGetDetail,
    atolesPost,
    atolesUpdate,
    atolesDelete
}