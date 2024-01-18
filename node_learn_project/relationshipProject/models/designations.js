'use strict';
const {
    Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Designations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Designations.init({
        designation_name: {
            type: STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Designations',
    });
    return Designations;
};
