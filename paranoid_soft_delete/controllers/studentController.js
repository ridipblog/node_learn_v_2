const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const Employe = db.employe;
let paraNoid = async (req, res) => {
  // delete data
  //   let data = await Employe.findAll({});
  //   let data = await Employe.destroy({
  //     where: {
  //       id: 2,
  //     },
  //   });
  // Get Data With Delete data

  // let data = await Employe.findAll({
  //   where: {
  //     id: {
  //       [Op.gt]: 0,
  //     },
  //   },
  //   paranoid: false,
  // });

  // Resote data

  let data = await Employe.restore({
    where: {
      id: 2,
    },
  });
  res.status(200).json(data);
};
module.exports = {
  paraNoid,
};
