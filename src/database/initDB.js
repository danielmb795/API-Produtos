import sequelize from "./db/db.js";
import 'dotenv/config';
import Produto from "./models/produtos.js";


async function connectDB() {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("DataBase connected");
    }catch(error){
        console.error(error)
    }
}

export default connectDB;