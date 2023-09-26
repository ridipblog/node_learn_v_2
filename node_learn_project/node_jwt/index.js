// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// const bcrypt = require("bcrypt");
// const auth = require("./middleware/auth");
// const secrectKey = "SecrectKet";
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Ok",
//   });
// });
// app.post("/registration", async (req, res) => {
//   const pass = await bcrypt.hash("1234", 10);
//   const user = {
//     id: 1,
//     user_name: "coder",
//     email: "coder@gmail.com",
//     password: pass,
//   };
//   const token = await jwt.sign({ email: user.email, id: user.id }, secrectKey);
//   res.status(200).send({ user: user, token: token });
// });

// app.post("/login", auth, async (req, res) => {
//   console.log(req.userId);
//   res.status(201).json({ user_id: req.userId, user_email: req.userEmail });
// });
// app.listen(3000);

const express = require("express");
const cors = require("cors");
const app = express();
var corOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./routes/UserRoute");
app.use("/api/", router);
const port = process.env.PORT || 3000;
app.listen(3000);
