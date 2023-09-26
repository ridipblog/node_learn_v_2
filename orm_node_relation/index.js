const express = require("express");
const app = express();
require("./models/conn");
var studentContr = require("./controllers/studentController");
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/one-to-one", studentContr.oneToOne);
app.get("/belong-to", studentContr.belongTo);
app.get("/one-to-many", studentContr.oneToMany);

// Many To Many
app.get("/many-to-many", studentContr.manyToMany);
app.listen(3000);
