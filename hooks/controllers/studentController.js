const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const Test = db.test;
const Employe = db.employe;
let hooks = async (req, res) => {
  let data = await Test.create({
    name: "coder14",
    email: "coder19@gmail.com",
  });
  res.status(200).json("Hooks");
};
module.exports = {
  hooks,
};
