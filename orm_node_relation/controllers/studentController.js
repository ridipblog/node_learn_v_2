const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const Students = db.students;
const Posts = db.posts;
const Tags = db.tags;
// Relation Database

// One To One

let oneToOne = async (req, res) => {
  // let data = await Students.findAll({
  //   include: Posts,
  //   where: { id: 1 },
  // });

  let data = await Students.findAll({
    attributes: ["name", "email"],
    include: [
      {
        model: Posts,
        as: "Postdetails",
        attributes: ["title", "content"],
      },
    ],
  });
  res.status(200).json(data);
};
let belongTo = async (req, res) => {
  let data = await Posts.findAll({
    attributes: ["title", "content"],
    include: [
      {
        model: Students,
        attributes: ["name", "email"],
        as: "StudentInfo",
      },
    ],
  });
  res.status(200).json(data);
};

// One To Many
let oneToMany = async (req, res) => {
  let data = await Students.findAll({
    attributes: ["name", "email"],
    include: [
      {
        model: Posts,
        as: "Postdetails",
        attributes: ["title", "content"],
      },
    ],
    where: { id: 1 },
  });
  res.status(200).json(data);
};
let manyToMany = async (req, res) => {
  // Post To Tags

  // let data = await Posts.findAll({
  //   include: [
  //     {
  //       model: Tags,
  //     },
  //   ],
  // });

  // Tag To Post

  let data = await Tags.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  res.status(200).json(data);
};
module.exports = {
  oneToOne,
  belongTo,
  oneToMany,
  manyToMany,
};
