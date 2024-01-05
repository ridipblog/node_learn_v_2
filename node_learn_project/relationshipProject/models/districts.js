'use strict';
const {
    Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Districts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Districts.init({
        district_name: {
            type: STRING,
            allowNull: false
        },
        district_code: {
            type: INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Districts',
        tableName: 'districts'
    });
    return Districts;
};
