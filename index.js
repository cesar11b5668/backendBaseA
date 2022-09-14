require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req , res) => {
    res.send('hola mundo')
})

app.listen(process.env.PORT, () => {
    console.log("backend en ejecucion en el puerto", process.env.PORT)
})