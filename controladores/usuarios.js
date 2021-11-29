const { response, request } = require("express")
const Usuario = require("../models/usuario")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


const usuariosGet = async(req=request, res = response) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { estado: true }

  const [total, usuarios]= await Promise.all([
    Usuario.countDocuments( query),
    Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
  ])

  res.json({ total, usuarios})
}
const usuariosPut = async(req, res) => {
  const { id} = req.params
  const { _id, password, email, google, ...resto} = req.body

  //validar contra base de datos
  if(password){
    const salt = bcrypt.genSaltSync()
    resto.password = bcrypt.hashSync(password, salt)
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto)

  res.json(usuario)
}


const usuariosPost = async (req, res = response) => {

  const { name, password, email, rol} = req.body
  const usuario = new Usuario(req.body)

  const salt = bcrypt.genSaltSync()
  usuario.password = bcrypt.hashSync(password, salt)

  try {
    await usuario.save()
    //res.json({ mensaje: 'Usuario Creado Correctamente' });


  const usuarioNew = await Usuario.findOne({ email })
  console.log(usuarioNew);
  //GENERAR jwt
  const token = jwt.sign({
    email: usuarioNew.email,
    nombre: usuarioNew.nombre,
    id: usuarioNew._id,
    rol: usuarioNew.rol
  },
    'LLAVESECRETA',
    {
      expiresIn: '4h'
    });
    let nombreenv = name
     res.json({
      token, nombreenv
    })
  } catch (error) {
    res.json({ mensaje: 'Hubo un error' });
  }


}
const usuariosDelete = async(req, res = response) => {
  const {id} = req.params

  const usuario = await Usuario.findByIdAndUpdate( id)

  res.status(201).json({ usuario })
}


const usuariosPatch = (req, res = response) => {
  res.status(201).json({
    msg: "Patch api"
  })
}



module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
  usuariosPut
}