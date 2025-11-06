import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    database: process.env.DATABASE,
    username: process.env.USERNAMEDB,
    password: process.env.password
})


async function connectDB() {
    try{
        await sequelize.authenticate();
        console.log("DataBase connected");
    }catch(error){
        console.error(error)
    }
}

export default connectDB;