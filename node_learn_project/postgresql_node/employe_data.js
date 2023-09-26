const { DataTypes } = require('sequelize');
const sequelize = require('./config');
const EmployeData = sequelize.define('EmployeData', {
    user_name: {
        type: DataTypes.STRING
    },
    study: {
        type: DataTypes.STRING
    }
});
module.exports = EmployeData;