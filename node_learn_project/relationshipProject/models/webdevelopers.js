'use strict';
const {
    Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class WebDevelopers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    WebDevelopers.init({
        name: {
            type: STRING,
            allowNull: false
        },
        email: {
            type: STRING,
            allowNull: false
        },
        designation: {
            type: STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'WebDevelopers',
        tableName: 'webdevelopers'
    });
    return WebDevelopers;
};
