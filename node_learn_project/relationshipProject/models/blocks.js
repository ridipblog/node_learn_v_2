'use strict';
const {
    Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blocks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Blocks.init({
        block_name: {
            type: STRING,
            allowNull: false
        },
        block_code: {
            type: String,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Blocks',
        tableName: 'blocks'
    });
    return Blocks;
};
