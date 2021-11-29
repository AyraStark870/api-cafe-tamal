const { response } = require("express")


const esAdminRole = (req, res = response, next)=>{
  console.log('xxxx');
  console.log(req.usuario);

  if(!req.usuario){
    return res.status(500).json({
      msg: 'se quiere verificar el rol sin validar el token antes'

    })
  }

  const { rol, name } = req.usuario//recordar que este user se encuentra por el uid que viene el payload del token

  if(rol !== 'ADMIN_ROLE'){
    return res.status(401).json({
      msg: `${name} no tiene permisos de administrador`
    })
  }

   next()
}
const tieneRole = ( ...roles ) =>{//recibo los argumentos y retorno la funcion que se ejecutara en la ruta
  return (req, res = response, next) =>{

    if (!req.usuario) {
      return res.status(500).json({
        msg: 'se quiere verificar el rol sin validar el token antes'
      })
    }
    if( !roles.includes(  req.usuario.rol)){
      return res.status(401).json({
        msg: ` el servicio requiere uno de estos roles: ${ roles }`
      })
    }

    next()
  }
}

module.exports = {
  esAdminRole,
  tieneRole
}