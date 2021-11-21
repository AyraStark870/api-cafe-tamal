const { response, request } = require("express")
const Tamal = require('../models/tamal')


const tamalesGet = async (req = request, res = response) => {

  const tamal = await Tamal.find()


  res.status(201).json({tamal})
}
const tamalesGetDetail = async (req = request, res = response) => {
  const { id } = req.params
  const tamal = await Tamal.findById(id)


  res.status(201).json({tamal})
}
const tamalesPost = async (req, res = response) => {

  const tamal = new Tamal(req.body)
  await tamal.save()

  res.json({
   tamal
  })
}

const tamalesUpdate = async (req, res, next) => {
  const { id } = req.params
  const newData = req.body

  const tamalActualizado = await Tamal.findByIdAndUpdate(id, newData, { new: true })
  res.json(tamalActualizado)

}
const  tamalesDelete = async (req, res = response) => {
  const { id } = req.params

  const tamal = await Tamal.findByIdAndDelete(id)

  res.status(201).json({ tamal })
}

module.exports = {
    tamalesGet,
    tamalesGetDetail,
    tamalesPost,
    tamalesUpdate,
    tamalesDelete
}