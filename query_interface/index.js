const express = require("express");
const app = express();
require("./models/conn");
var studentContr = require("./controllers/studentController");
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/query-interface-data", studentContr.queryInterfaceData);
app.listen(3000);
