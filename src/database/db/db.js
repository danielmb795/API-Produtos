import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    database: process.env.DATABASE,
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORD
})

export default sequelize;