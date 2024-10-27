// config/db.js
import { Sequelize } from 'sequelize';
import './envConfig.js';

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
    });

export default sequelize;