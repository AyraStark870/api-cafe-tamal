const { response, request } = require("express")
const Cafe = require('../models/cafe')
//const bcrypt = require('bcrypt');



const cafesGet = async (req = request, res = response) => {

  const cafes = await Cafe.find()


  res.status(201).json({cafes})
}
const cafesGetDetail = async (req = request, res = response) => {
  const { id } = req.params
  const cafe = await Cafe.findById(id)


  res.status(201).json({cafe})
}
const cafesPost = async (req, res = response) => {

  const cafe = new Cafe(req.body)
  await cafe.save()

  res.json({
   cafe
  })
}

const cafesUpdate = async (req, res, next) => {
  const { id } = req.params
  const newData = req.body

  const cafeActualizado = await Cafe.findByIdAndUpdate(id, newData, { new: true })
  res.json(cafeActualizado)

}
const cafesDelete = async (req, res = response) => {
  const { id } = req.params

  const cafe = await Cafe.findByIdAndDelete(id)

  res.status(201).json({ cafe })
}



module.exports = {
  cafesGet,
  cafesPost,
  cafesGetDetail,
  cafesUpdate,
  cafesDelete

}