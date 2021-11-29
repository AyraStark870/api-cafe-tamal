const { response, request } = require("express")
const Usuario = require("../models/usuario")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const { generarJWT} = require("../helpers/generar-jwt")

const login = async(req = request, res= response) => {
  const { email, password} = req.body

  try {
    //VERIFICAR SI EL EMAIL EXISTE
    const usuario = await Usuario.findOne({ email})
    if (!usuario) {
      return res.status(400).json({
        msg: "usuario/ password"
      })
    }

    //VERIFICAR EL PASSWORD
    const validPassword = bcrypt.compareSync( password, usuario.password)
    if (!validPassword ) {
      return res.status(400).json({
        msg: "password incorrecto"
      })
    }
    const token = await generarJWT(usuario)
    req.usuario=usuario
    console.log(req.usuario);

        let rolenv = usuario.rol
    let nombreenv = usuario.name

    res.json({
      token, rolenv, nombreenv
    })

  } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: "hable con al administrador"
      })
  }

}

module.exports =  {
  login
}