import express from 'express';
import 'dotenv/config';
import initDB from './src/database/initDB.js'
import router from './src/routes/routes.js'

const srv = express();
const port = process.env.PORT;

srv.use(express.json());
srv.use(router)

initDB()

srv.listen(port, () => {
    console.log(`Server Running in port ${port}`)
})