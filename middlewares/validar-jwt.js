const { response, request } = require("express")
const jwt = require("jsonwebtoken")

const Usuario = require("../models/usuario")

const validarWJT = async(req = request, res = response, next) => {

  const authHeader = req.get('Authorization');
  //const token = req.header("Authorization")

  if (!authHeader) {
    const error = new Error('No autenticado, no hay JWT');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];

    console.log( token);


  // obtener el token y verificarlo
  //const token = authHeader.split(' ')[1];
  let revisarToken;
  try {
    revisarToken = jwt.verify(token, 'LLAVESECRETA');
    const id = revisarToken.id
    const usuario = await Usuario.findById(id)
    console.log(usuario);
    req.usuario = usuario;//se establece la info del user en la req
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  // Si es un token valido, pero hay algun error
  if (!revisarToken) {
    const error = new Error('No autenticado');
    error.statusCode = 401;
    throw error;
  }

  next();
  // const token =req.header("x-token")

  // if(!token){
  //   return res.status(401).json({
  //     msg:"no hay token en la peticion"
  //   })
  // }

  // try {

  //   const { _id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY )//el id de la persona que esta haciendo la peticion
  //   const id = _id
  //   const usuario = await Usuario.findById(_id)
  //   console.log(usuario)

  //   if(!usuario){
  //     return res.status(401).json({
  //       msg: "token no valido -usuario no existe en BD"
  //     })
  //   }

  //   req.usuario = usuario;//se establece la info del user en la req
  //   next()

  // } catch (error) {
  //   console.log(error);
  //   return res.status(401).json({
  //     msg: " token no valido"
  //   })
  // }


  // next()
}

module.exports = {
  validarWJT
}