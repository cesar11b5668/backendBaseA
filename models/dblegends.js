const modeloDBlegends = {
     queryGetfighters: "SELECT * FROM DBlegends",
     queryGetfightersById: `SELECT * FROM dblegends WHERE ID = ?`,
     queryDeletedfighter: `UPDATE DBlegends SET Activo = 'N' WHERE ID = ?`,
     queryfighterexist: `SELECT Luchador FROM dblegends WHERE Luchador = '?'`,
     queryaddfighter: `INSERT INTO dblegends (
         Clave,
         Luchador,
         Afinidad,
         Rareza,
         Nivel,
         Etiqueta,
         Episodios,
         Estilo_de_lucha,
         Zenkai,
         Desbloqueado,
         linaje,
         Activo
     ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
       
     )`,

     querygetfighterinfo: `SELECT 
     Clave,
     Luchador,
     Afinidad,
     Rareza,
     Nivel,
     Etiqueta,
     Episodios,
     Estilo_de_lucha,
     Zenkai,
     Desbloqueado,
     linaje,
     Activo
     FROM DBlegends
     WHERE dblegends = ?`,

    queryupdatebyfighter:`UPDATE DBlegends SET (   
      Clave, 
      Luchador= ?,
      Afinidad=?,
      Rareza=? ,
      Nivel=?,
      Etiquetas=?,
      Episodios=?,
      Estilo_de_lucha=?,
      Zenkai=?,
      Desbloqueado=?,
      linaje=?,
      Activo=?
      WHERE DBlegends=?`,



    
}

module.exports = modeloDBlegends