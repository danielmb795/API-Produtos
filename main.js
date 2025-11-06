import express from 'express';
import 'dotenv/config';

const srv = express();

const port = process.env.PORT;

import initDB from './src/database/initDB.js'

initDB()

srv.get("/", (req,res) => {
    res.send("teste")
})

srv.listen(port, () => {
    console.log(`Server Running in port ${port}`)
})