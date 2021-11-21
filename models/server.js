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
    this.tamalesPath = "/api/tamales"
    this.atolesPath = "/api/atoles"

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

  }
  routes(){
    this.app.use(this.cafePath, require("../routes/cafes"))
    this.app.use(this.pastelesPath, require("../routes/pastel"))
    this.app.use(this.tamalesPath, require("../routes/tamal"))
    this.app.use(this.atolesPath, require("../routes/atol"))
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