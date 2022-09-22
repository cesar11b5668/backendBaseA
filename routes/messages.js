const {Router} = require("express")
const router = Router()
const {rootMessage, hiMessage, byeMessage} = require('../controllers/messages')
router.get("/", rootMessage)//end point
router.get("/hi", hiMessage) //end point
router.get("/bye", byeMessage) //end point

module.exports = router