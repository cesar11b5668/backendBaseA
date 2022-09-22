require('dotenv').config()

const Server = require('./Server')
const server = new Server()

server.listen()