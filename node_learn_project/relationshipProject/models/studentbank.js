'use strict';
const {
    Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class StudentBank extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    StudentBank.init({
        student_id: {
            type: INTEGER,
            allowNull: false
        },
        bank_name: {
            type: STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'StudentBank',
        tableName: 'studentbanks'
    });
    return StudentBank;
};
