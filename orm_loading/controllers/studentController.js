const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");

const Users = db.users;
const Contact = db.contact;
Users.hasMany(Contact, { foreignKey: "userId" });
Contact.belongsTo(Users, { foreignKey: "userId" });
let lazy_loading = async (req, res) => {
  let data = await Users.findAll({
    where: { id: 1 },
  });
  let response = await data.getContact();
  console.log(JSON.stringify(response, null, 2));
  res.status(200).json("response");
};

module.exports = {
  lazy_loading,
};
