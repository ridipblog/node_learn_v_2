'use strict';
const {
    Model, INTEGER, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class studenteducation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    studenteducation.init({
        student_id: {
            type: STRING,
            allowNull: false
        },
        board_name: {
            type: String,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'studenteducation',
    });
    return studenteducation;
};
