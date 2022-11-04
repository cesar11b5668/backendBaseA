const { request, response } = require("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const modeloUsuarios = require("../models/usuarios");
const getUsers = async (req = request, res = response) => {
 let conn;

 try {
    conn = await pool.getConnection()

    const users = await conn.query(modeloUsuarios.queryGetUsers, (error) => {throw new Error(error)})

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
const getUserByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
  
      const [user] = await conn.query(modeloUsuarios.queryGetUsersById,[id], (error) => {throw new Error(error)})
  
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
  const deleteUserByID = async (req = request, res = response) => {
   const {id} = req.params
   let conn;
  
   try {
      conn = await pool.getConnection()
      const {affectedRows} = await conn.query( modeloUsuarios.queryDeleteduser,[id], (error) => {throw new Error(error)})
  
      if (affectedRows=== 0) {
          res.status(404).json({msg: `No se pudo eliminar el usuario con el registro con el ID ${id}`})
          return
      }
      res.json({msg: `El usario con ID ${id} se elimino correctamente`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }


  
  const addUser = async (req = request, res = response) => {
   const {
      Usuario,
      Nombre,
      Apellidos,
      Edad,
      Genero,
      Contrasena,
      Fecha_nacimiento = '1999-03-28',
      Activo
   } = req.body
   if(      
   !Usuario||
   !Nombre||
   !Apellidos||
   !Edad||
   !Contrasena||
   !Activo
   ){
      res.status(400).json({msg: "Falta informacion del usuario"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modeloUsuarios.queryuserexist,[Usuario])

      if(!user){
         res.status(403).json({msg: `El Usuario ${Usuario} ya se encuentra registrado`})
         return
      }

      const salt = bcryptjs.genSaltSync()
      const ContrasenaCifrada = bcryptjs.hashSync(Contrasena, salt)

      const affectedRows = await conn.query(modeloUsuarios.queryadduser[
         Usuario,
         Nombre,
         Apellidos,
         Edad,
         Genero || '',
         ContrasenaCifrada,
         Fecha_nacimiento,
         Activo
      
      ] , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del usuario ${Usuario}`})
         return
   }
      res.json({msg: `el usuario ${Usuario} se agreggó correctamente :D`})
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

  const updateUserByUsuario = async (req = request, res = response) => {
   const {
      Usuario,
      Nombre,
      Apellidos,
      Edad,
      Genero,
      Contrasena,
      Fecha_nacimiento = '1999-03-28',
      Activo
   } = req.body
   console.log({Usuario,
      Nombre,
      Apellidos,
      Edad,
      Genero,
      Contrasena,
      Fecha_nacimiento,
      Activo})
   if(      
   !Usuario||
   !Nombre||
   !Apellidos||
   !Edad||
   !Contrasena
   )
   {
      res.status(400).json({msg: "Falta informacion del usuario"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const user = await conn.query(modeloUsuarios.querygetuserinfo, [Usuario])

      if(user){
         res.status(403).json({msg: `El usuario ${Usuario} no se encuentra registrado`})
      }

      const affectedRows = await conn.query(modeloUsuarios.queryupdatebyusuario[
         Nombre || user.Nombre,
            Apellidos || user.Apellidos,
            Edad || user.Edad,
            Genero || user.Genero,
            Fecha_nacimiento,
            Usuario
      ]
        
      , (error) => {throw new Error(error)})
      

      if (affectedRows === 0) {
         res.status(404).json({msg: `no se pudo agregar el registro del usuario ${Usuario}`})
         return
   }
      res.json({msg: `el usuario ${Usuario} se actualizo correctamente :D`})
   } catch (error) {
      console.log(error)
      res.status(500).json({error})
   } finally{
      if (conn) {
          conn.end()
      }
   }
  }

  
  const signIn = async (req = request, res = response) => {
   const {
      Usuario,
      Contrasena,
      } = req.body
   if(      
   !Usuario||
   !Contrasena
   ){
      res.status(400).json({msg: "Falta informacion del usuario"})
      return
   }
   let conn;
  
   try {
      conn = await pool.getConnection()

      const [user] = await conn.query(modeloUsuarios.querysignIn[Usuario])

      if(!user || user.Activo === 'N'){
         let code = !user ? 1 : 2;
         res.status(403).json({msg: `El Usuario o la contraseña son incorrectas.`, errorCode: code})
         return
      }

      const accesoValido = bcryptjs.compareSync(Contrasena, user.Contrasena)

      if (!accesoValido) {
         res.status(403).json({msg: `El Usuario o la contraseña son incorrectas.`, errorCode: 3})
         return
      }

      res.json({msg: `el usuario ${Usuario} ha iniciado sesion satisfactoriamente`})
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


  const newPassword = async (req=request,res=response)=>{
   const {
       Usuario,
       AContrasena,
       NContrasena
   }=req.body

   if(
       !Usuario||
       !AContrasena||
       !NContrasena
   ){
       res.status(400).json({msg:"Faltan datos."})
       return
   }

   let conn;

   try{
       conn = await pool.getConnection()
       const [user]=await conn.query(`SELECT Usuario, Contrasena, Activo FROM usuarios WHERE Usuario = '${Usuario}'`)

       if(!user || user.Activo == 'N'){
           let code = !user ? 1: 2;
           res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:code})
           return
       }

       const datosValidos = bcryptjs.compareSync(AContrasena,user.Contrasena)

       if(!datosValidos){
           res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:"3"})
           return
       }

       const salt = bcryptjs.genSaltSync()
       const contrasenaCifrada = bcryptjs.hashSync(NContrasena,salt) 

       const {affectedRows} = await conn.query(`
           UPDATE usuarios SET
               Contrasena='${contrasenaCifrada}'
           WHERE Usuario= '${Usuario}'
           `,(error)=>{throw new error})
       if(affectedRows===0){
           res.status(404).json({msg:`No se pudo actualizar la contraseña de ${Usuario}`})
           return
       }
       res.json({msg:`La contraseña de ${Usuario} se actualizo correctamente`})
   }catch(error){
       console.log(error)
       res.status(500).json({error})
   }finally{
       if(conn){
           conn.end()
       }
   }
}



module.exports = {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario, signIn}