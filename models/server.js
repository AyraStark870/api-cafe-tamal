const express = require("express")
const cors = require("cors")
const db = require("../lib/db");


class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 5000
    this.host = process.env.HOST ||'0.0.0.0'
    this.cafePath = "/api/cafes"
    this.pastelesPath = "/api/pasteles"
    this.newUser = "/api/usuario"
    this.authPath = "/api/autenticar"

    //middlewares
    this.middlewares()
    //rutas de mi aplicacion
    this.routes()
  }
  middlewares(){
    //cors
    this.app.use(cors())
    //lectura y parseo del body
    this.app.use( express.json() )

    this.app.use( express.static('public') )

  }
  routes(){
    this.app.use(this.cafePath, require("../routes/cafes"))
    this.app.use(this.pastelesPath, require("../routes/pastel"))
    this.app.use(this.newUser, require("../routes/user"))
    this.app.use(this.authPath, require("../routes/auth"))

  }

  listen(){
    this.app.listen(this.port, this.host, () => {
      console.log(`escuchando en el puerto  ${this.port}`)
       db.dbConnection()
          .then(() => {
           console.log("DB connected");

         })
         .catch((err) => {
           console.error("Connection refused", err);
         });
    })
  }

}

module.exports = Server;