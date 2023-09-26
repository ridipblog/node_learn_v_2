const { response, query } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where, DataTypes } = require("sequelize");
const Test = db.test;

const queryInterface = db.sequelize.getQueryInterface();
let queryInterfaceData = async (req, res) => {
  // Create Table

  // queryInterface.createTable("coders", {
  //   name: DataTypes.STRING,
  // });

  // Column Added

  // queryInterface.addColumn("coders", "email", {
  //   type: DataTypes.STRING,
  // });

  // Change Column

  // queryInterface.changeColumn("coders", "email", {
  //   type: DataTypes.INTEGER,
  // });

  // Remove Column

  // queryInterface.removeColumn("coders", "email");

  // Drop Table

  queryInterface.dropTable("coders");
  res.status(200).json("Query Inrterface");
};
module.exports = {
  queryInterfaceData,
};
