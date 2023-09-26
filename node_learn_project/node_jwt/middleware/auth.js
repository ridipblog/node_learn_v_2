const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcrypt");
const secrectKey = "SecrectKet";
const auth = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      let token = req.headers.authorization;
      if (token) {
        token = token.split(" ")[1];
        let user = jwt.verify(token, secrectKey);
        req.userId = user.id;
        req.userEmail = user.email;
      } else {
        res.status(401).json("Unathorized User");
      }
      next();
    } else {
      res.status(401).json("Unathorized User");
    }
  } catch (error) {
    console.log(error);
    res.status(401).json("Error Executed");
  }
};

module.exports = auth;
