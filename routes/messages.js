const {Router} = require("express")
const router = Router()
const {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage} = require('../controllers/messages')
router.get("/", rootMessage)//end point
router.get("/hi/:name", hiMessage) //end point
router.get("/bye", byeMessage) //end point
router.post('/', postMessage)//end point
router.put('/', putMessage)//end point
router.delete('/', deleteMessage)//end point
module.exports = router

