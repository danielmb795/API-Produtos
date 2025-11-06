import express from 'express';

const srv = express();

const port = process.env.PORT

srv.get("/", (req,res) => {
    res.send("teste")
})

srv.listen(port, () => {
    console.log(`Server Running in port ${port}`)
})