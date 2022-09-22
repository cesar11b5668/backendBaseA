const rootMessage = (req, res) => {
    res.send("Hola buendia!")}
    
    
const hiMessage =  (req, res) => {
    res.send("Hola mundo!")}


    const byeMessage = (req, res) => {
        res.send("Adios Mundo!")}

    module.exports = {rootMessage , hiMessage , byeMessage}      