const express = require('express')
const messagesRouter = require('./routes/messages')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages: "/api/v1/messages"
        }
        this.middlewares()
        this.routes()
    
    }

    routes(){
        this.app.use(this.paths.messages, messagesRouter)
    }

    middlewares(){
        this.app.use(cors())//permite solicitudes de origen cruzado
        this.app.use(express.json())//habilita la lectura de contenido en formato json
    }

    listen(){
        this.app.listen(process.env.PORT, ()=> {
            console.log(process.env.PORT);
        })
    }
}

module.exports = Server