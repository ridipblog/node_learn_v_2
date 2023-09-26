const UserController = require("../controllers/UserController");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
router.post("/addUser", UserController.addUser);
router.post("/login", UserController.login);
router.get("/profile", auth, UserController.profile);
module.exports = router;
