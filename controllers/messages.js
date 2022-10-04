const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    const {texto1,texto2} = req.query
//if (!texto1 || !texto2){
  //res.status(400).json({msg: "No se han enviado los parametros necesarios, este endpoint ocupa los parametros "texto1" y "texto2"})
    //res.status(200).json({msg:texto1+ ' ' + texto2})}
//}
if (!texto1){
    res.status(400).json({msg: "falta el parametro 'texto1'"})}

    if (!texto2){
        res.status(400).json({msg: "falta el parametro 'texto2'"})   
}
    res.status(200).json({msg:texto1+ ' ' + texto2})}


const hiMessage =  (req = request, res = response) => {
    const {name}= req.params
    res.status(200).json({msg:'hola ' + name})}


const byeMessage = (req = request, res = response) => {
        res.status(418).json({msg:"adios mundo cruel!"})}

const postMessage = (req = request, res = response) => {
    const{no_control, nombre}= req.body
    //console.log({no_control, nombre})    
    res.status(200).json({
        msg: `numero de control= ${no_control}, nombre= ${nombre}`})}

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


    