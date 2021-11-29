const jwt = require("jsonwebtoken")

const generarJWT = ( usuario ) => {
   //GENERAR jwt
    const token = jwt.sign({
      email: usuario.email,
      nombre: usuario.nombre,
      id: usuario._id,
      rol: usuario.rol
    },
      'LLAVESECRETA',
      {
        expiresIn: '4h'
      });
    return token
    // let rolenv = usuario.rol
    // let nombreenv = usuario.name

    // res.json({
    //   token, rolenv, nombreenv
    // })
  // return new Promise((resolve, reject) =>{
  //   const  payload = { _id}

  //   jwt.sign(payload, process.env.SECRETORPRIVATEKEY, (err, token) => {


  //   if (err) {
  //     console.log(err);
  //     reject("no se pudo generar el token")
  //   } else {
  //     console.log('se generp un token');
  //     resolve(token)
  //   }
  //  })
  // })
}


module.exports = {
  generarJWT
}