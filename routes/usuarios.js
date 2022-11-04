const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario, signIn} = require("../controllers/usuarios")
const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2
///GET///
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

///POST///
router.post("/", addUser)
router.post("/signin", signIn)

///put///
router.get("/", updateUserByUsuario)

///DELETE///
router.delete("/" , deleteUserByID)




module.exports = router