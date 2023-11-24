'use strict';
const {
    Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Users.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        state_id: DataTypes.INTEGER,
        city_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};
