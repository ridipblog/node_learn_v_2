'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    name: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Students',
    tableName: "students"
  });
  return Students;
};