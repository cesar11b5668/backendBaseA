const { request, response } = require("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const modelodblegends = require("../models/dblegends");
const getfighters = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const users = await conn.query(modelodblegends.queryGetfighters, (error) => {throw new Error(error)})

    if (!users) {
        res.status(404).json({msg: "no se encontraron registros"})
        return
    }
    res.json({users})
 } catch (error) {
    console.log(error)
    res.status(500).json({error})
 } finally{
    if (conn) {
        conn.end()
    }
 }
}
const getfightersByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
  
      const [user] = await conn.query(modelodblegends.queryGetfightersById,[id], (error) => {throw new Error(error)})
  
      if (!user) {
          res.status(404).json({msg: `no se encontro registro con el ID ${id}`})
          return
      }
      res.json({user})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}
const deletefightersByID = async (req = request, res = response) => {
   const {id} = req.query
   let conn;
   try {
      conn = await pool.getConnection()
      const {affectedRows} = await conn.query( modelodblegends.queryDeletedfighter,[id], (error) => {throw new Error(error)})
  
      if (affectedRows=== 0) {
          res.status(404).json({msg: `No se pudo eliminar el luchador con el registro con el ID ${id}`})
          return
      }
      res.json({msg: `El luchador con ID ${id} se elimino correctamente`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}
const addfighter = async (req = request, res = response) => {
   const {
      Clave,
      Luchador,
      Afinidad,
      Rareza,
      Nivel,
      Etiquetas,
      Episodios,
      Estilo_de_lucha,
      Zenkai,
      Desbloqueado,
      linaje,
      Activo
   } = req.body
   if(      
   !Clave||
   !Luchador||
   !Afinidad||
   !Rareza||
   !Nivel||
   !Etiquetas||
   !Episodios||
   !Estilo_de_lucha||
   !Zenkai||
   !Desbloqueado||
   !linaje||
   !Activo
   ){
      res.status(400).json({msg: "Falta informacion del usuario"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modelodblegends.queryfighterexist,[Luchador])

      if(!user){
         res.status(403).json({msg: `El Usuario ${Luchador} ya se encuentra registrado`})
         return
      }

      const salt = bcryptjs.genSaltSync()

      const affectedRows = await conn.query(modelodblegends.queryaddfighter,[
         Clave,
         Luchador,
         Afinidad,
         Rareza,
         Nivel,
         Etiquetas,
         Episodios,
         Estilo_de_lucha,
         Zenkai,
         Desbloqueado,
         linaje,
         Activo
      
      ] , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el luchador ${Luchador}`})
         return
   }
      res.json({msg: `el guerrero z ${Luchador} se agrego correctamente :D`})
      return
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}

const updatefighterZByfighter = async (req = request, res = response) => { const {
      Clave,
      Luchador,
      Afinidad,
      Rareza,
      Nivel,
      Etiquetas,
      Episodios,
      Estilo_de_lucha,
      Zenkai,
      Desbloqueado,
      linaje,
      Activo
   } = req.body
   if(      
      !Clave||
      !Luchador||
      !Afinidad||
      !Rareza||
      !Nivel||
      !Etiquetas||
      !Episodios||
      !Estilo_de_lucha||
      !Zenkai||
      !Desbloqueado||
      !linaje||
      !Activo
   )
   {
      res.status(400).json({msg: "Falta informacion del guerrero z"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modelodblegends.queryGetfighters, [Luchador])

      if(user){
         res.status(403).json({msg: `El usuario ${Luchador} no se encuentra registrado`})
      }

      const affectedRows = await conn.query(modelodblegends.queryupdatebyfighter[
         Clave || user.Clave,
            Luchador || user.Luchador,
            Afinidad || user.Afinidad,
            Rareza || user.Rareza,
            Nivel || user.Nivel,
            Etiquetas || user.Etiquetas,
            Episodios || user.Episodios,
            Estilo_de_lucha || user.Estilo_de_lucha,
            Zenkai || user.Zenkai,
            Desbloqueado || user.Desbloqueado,
            linaje || user.linaje,
            Activo
      ]
        
      , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del usuario ${Luchador}`})
         return
   }
      res.json({msg: `el usuario ${Luchador} se actualizo correctamente :D`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
}


module.exports = {getfighters,getfightersByID,deletefightersByID,addfighter,updatefighterZByfighter}