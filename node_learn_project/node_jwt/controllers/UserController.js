const db = require("../models/conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrectKey = "SecrectKet";
const Users = db.users;
let addUser = async (req, res) => {
  const pass = await bcrypt.hash(req.body.password, 10);
  let info = {
    name: req.body.name,
    email: req.body.email,
    password: pass,
  };
  try {
    const users = await Users.create(info);
    res.status(200).json("User Created ");
  } catch (err) {
    console.log(err);
    res.status(401).json("Error");
  }
};
let login = async (req, res) => {
  let status = null;
  let message = null;
  let token = null;
  if (req.body.password && req.body.email) {
    const user_info = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user_info == null) {
      status = 400;
      message = "User Not Found !";
    } else {
      token = await jwt.sign(
        { email: user_info.email, id: user_info.id },
        secrectKey
      );
      check = await bcrypt
        .compare(req.body.password, user_info.password)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return false;
        });
      if (check) {
        status = 200;
        message = "Login Success";
      } else {
        status = 400;
        message = "Credentials Not Matched";
      }
    }
  } else {
    status = 400;
    message = "Enter Credentials !";
  }
  res.status(status).json({ message: message, token: token });
};
const profile = async (req, res) => {
  res.status(200).json("profile_page");
};

module.exports = {
  addUser,
  login,
  profile,
};
