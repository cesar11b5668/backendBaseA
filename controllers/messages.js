const rootMessage = (req, res) => {
    res.send("Hola buen dia :D!")}
    
    
const hiMessage =  (req, res) => {
    res.send("Hola mundo!")}


const byeMessage = (req, res) => {
        res.send("Adios Mundo!")}

const postMessage = (req, res) => {
            res.send("Mensaje POST!")}

            const putMessage = (req, res) => {
                res.send("mensaje PUT!")}

                const deleteMessage = (req, res) => {
                    res.send("mensaje delete")}                


    module.exports = {rootMessage , 
        hiMessage , 
        byeMessage, 
        postMessage, 
        putMessage, 
        deleteMessage
    }      