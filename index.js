const express = require('express')
const app = express()

app.get('/', (req , res) => {
    res.send('hola mundo')
})

app.listen(4000, () => {
    console.log("backend en ejecucion")
})