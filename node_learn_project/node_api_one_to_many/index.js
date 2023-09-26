const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "https://localhost:3000",
};
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./routes/productRoute");
app.use("/api/products", router);
const port = process.env.PORT || 3000;
app.listen(port);
