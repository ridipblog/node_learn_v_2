const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const Test = db.test;
const Employe = db.employe;
let transaction = async (req, res) => {
  const t = await db.sequelize.transaction();
  // try {
  //   let data = await Test.create(
  //     {
  //       name: "coder2",
  //       email: "coder2@gmail.com",
  //     },
  //     {
  //       transaction: t,
  //     }
  //   );
  //   let data_1 = await Employe.create(
  //     {
  //       name: "coder1",
  //       emil: "coder1@gmail.com",
  //     },
  //     {
  //       transaction: t,
  //     }
  //   );

  //   t.commit();
  // } catch (e) {
  //   t.rollback();
  // }
  let data = await Test.findAll({
    transaction: t,
    lock: true,
  });
  res.status(200).json(data);
};
module.exports = {
  transaction,
};
