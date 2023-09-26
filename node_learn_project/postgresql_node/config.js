const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5430,
    username: 'postgres',
    password: '1234',
    database: 'code'
});
module.exports = sequelize;