const modeloUsuarios = {
     queryGetUsers: "SELECT * FROM Usuarios",
     queryGetUsersById: `SELECT * FROM Usuarios WHERE ID = ?`,
     queryDeleteduser: `UPDATE usuarios SET Activo = 'N'WHERE ID ?`,
     queryuserexist: `SELECT Usuario FROM Usuario WHERE Usuario = '?'`,
     queryadduser: `INSERT INTO Usuario (
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena,
        Fecha_nacimiento,
        Activo
     ) VALUES (
        '?',
        '?',
        '?',
        ?,
        '?',
        '?',
        '?',
        '?'
       
     )`,
     querygetuserinfo: `SELECT usuario, Nombre, Apellidos, Edad, Genero, Fecha_nacimiento 
     FROM usuarios 
     WHERE usuarios = '?'`,

    queryupdatebyusuario:`UPDATE usuarios SET (
        Nombre,= '?',
        Apellidos,='?',
        Edad,=? ,
        Genero,='?',
        Fecha_nacimiento='?',
        WHERE Usuario = '?'`,

    querysignIn: `SELECT Usuario, Contrasena, Activo FROM Usuario WHERE Usuario = '?'`,    
}
const updateUsuario = (
   Nombre,
   Apellidos,
   Edad,
   Genero,
   Contrasena,
   Fecha_nacimiento,
) => {
 return `UPDATE usuarios SET (
   Nombre,= '${Nombre}',
   Apellidos,='${Apellidos}',
   Edad,= ${Edad},
   ${Genero ? `Genero = '${Genero}',` : ''}
   Fecha_nacimiento='${Fecha_nacimiento}',
   WHERE Usuario = '${Usuario}'`
}


module.exports = {modeloUsuarios ,updateUsuario}