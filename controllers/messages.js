const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.json({msg:"Hola buen dia :D!"})}
    
    
const hiMessage =  (req = request, res = response) => {
    res.json({msg:"Hola mundo!"})}


const byeMessage = (req = request, res = response) => {
        res.json({msg:"Adios Mundo!"})}

const postMessage = (req = request, res = response) => {
            res.json({msg:"Mensaje POST!"})}

            const putMessage = (req = request, res = response) => {
                res.json({msg:"mensaje PUT!"})}

                const deleteMessage = (req = request, res = response) => {
                    res.json({msg:"mensaje delete"})}                


    module.exports = {rootMessage , 
        hiMessage , 
        byeMessage, 
        postMessage, 
        putMessage, 
        deleteMessage
    }      