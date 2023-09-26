const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const Students = db.students;
const Posts = db.posts;
const Tags = db.tags;

let scope = async (req, res) => {
  // let data = await Students.scope(["checkStatus", "checkGender"]).findAll({});
  // let data = await Posts.findAll({
  //   include: [
  //     {
  //       model: Students,
  //     },
  //   ],
  // });
  let data = await Students.scope(["includePost", "attributes"]).findAll({});
  res.status(200).json(data);
};

module.exports = {
  scope,
};
