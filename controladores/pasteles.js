const { response, request } = require("express")
const Pastel = require('../models/pastel')



const pastelesGet = async (req = request, res = response) => {

  const pasteles = await Pastel.find()

  res.status(201).json({ pasteles })
}

const pastelesGetDetail= async (req = request, res = response) => {
  const { id } = req.params
  const pastel= await Pastel.findById(id)


  res.status(201).json({ pastel })
}
const pastelesPost = async (req, res = response) => {

  const pastel = new Pastel(req.body)
  await pastel.save()

  res.json({
    pastel
  })
}

const pastelesUpdate = async (req, res, next) => {
  const { id } = req.params
  const newData = req.body

  const pastelActualizado = await Pastel.findByIdAndUpdate(id, newData, { new: true })
  res.json(pastelActualizado)

}
const pastelesDelete = async (req, res = response) => {
  const { id } = req.params

  const pastel = await Pastel.findByIdAndDelete(id)

  res.status(200).json({ pastel })
}

module.exports = {
    pastelesGet,
    pastelesGetDetail,
    pastelesPost,
    pastelesUpdate,
    pastelesDelete
}