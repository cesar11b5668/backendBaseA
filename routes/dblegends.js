const {Router} = require("express")
const { getfighters, getfightersByID, addfighter, updatefighterZByfighter, deletefightersByID } = require("../controllers/dblegends")
const router =  Router()

// http://localhost:4000/api/v1/usuarios/id/2

///GET///
router.get("/", getfighters)
router.get("/id/:id", getfightersByID)


///POST///
router.post("/", addfighter)

///put///
router.put("/", updatefighterZByfighter)

///DELETE///
router.delete("/" , deletefightersByID)





module.exports = router