'use strict';
const {
    Model, INET, INTEGER, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notifications extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Notifications.init({
        subject: {
            type: String,
            allowNull: false
        },
        district_code: {
            type: INTEGER,
            allowNull: false
        },
        block_code: {
            type: STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Notifications',
        tableName: 'notifications'
    });
    return Notifications;
};
