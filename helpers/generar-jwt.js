const jwt = require("jsonwebtoken")

const generarJWT = ( _id ) => {
  return new Promise((resolve, reject) =>{
    const  payload = { _id}

    jwt.sign(payload, process.env.SECRETORPRIVATEKEY, (err, token) => {


    if (err) {
      console.log(err);
      reject("no se pudo generar el token")
    } else {
      resolve(token)
    }
   })
  })
}


module.exports = {
  generarJWT
}