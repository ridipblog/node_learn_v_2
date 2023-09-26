const { response } = require("express");
var db = require("../models/conn.js");

const { Sequelize, Op, where } = require("sequelize");
const comment = require("../models/comment.js");

const Video = db.video;
const Image = db.image;
const Tags = db.tags;
const Tag_taggable = db.tag_taggable;

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

let polymorphi = async (req, res) => {
  // let data = await Image.findAll({
  //   include: [
  //     {
  //       model: Comment,
  //     },
  //   ],
  // });

  // let data = await Video.findAll({
  //   include: [
  //     {
  //       model: Comment,
  //     },
  //   ],
  // });

  // let data = await Comment.findAll({
  //   include: [Image, Video],
  // });

  let data = await Comment.findAll({
    include: [Image],
  });
  res.status(200).json(data);
};

let polymorphiMany = async (req, res) => {
  // let data = await Image.findAll({
  //   include: [Tags],
  // });

  // let data = await Video.findAll({
  //   include: [Tags],
  // });

  let data = await Tags.findAll({
    include: [Video, Image],
  });
  res.status(200).json(data);
};

module.exports = {
  scope,
  polymorphi,
  polymorphiMany,
};
