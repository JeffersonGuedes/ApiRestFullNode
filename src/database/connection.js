const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');

const connection = new Sequelize ({
          dialect: process.env.DIALECT,
          password: process.env.PASSO,
          host: process.env.HOST,
          port: process.env.PORT,
          username: process.env.USER,
          database: process.env.NAME
})

module.exports = connection;