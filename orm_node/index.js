const express = require("express");
const app = express();
require("./models/conn");
var studentContr = require("./controllers/studentController");
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/add", studentContr.addStudent);
app.get("/crud", studentContr.crudOpearation);
app.get("/query", studentContr.queryData);
app.get("/finder", studentContr.finderQuery);
app.get("/setter-getter", studentContr.setGetQuery);
app.get("/validation", studentContr.Validation);
app.get("/raw-query", studentContr.rawQuery);
app.listen(3000);
