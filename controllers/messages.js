const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.status(423).json({msg:"Hola buen dia :D!"})}
    
    
const hiMessage =  (req = request, res = response) => {
    res.status(404).json({msg:"Hola mundo!"})}


const byeMessage = (req = request, res = response) => {
        res.status(418).json({msg:"adios mundo cruel!"})}

const postMessage = (req = request, res = response) => {
        res.status(402).json({msg:"Mensaje POST!"})}

const putMessage = (req = request, res = response) => {
        res.status(403).json({msg:"mensaje PUT!"})}

const deleteMessage = (req = request, res = response) => {
        res.status(404).json({msg:"mensaje delete"})}                


    module.exports = {rootMessage , 
        hiMessage , 
        byeMessage, 
        postMessage, 
        putMessage, 
        deleteMessage
    } 