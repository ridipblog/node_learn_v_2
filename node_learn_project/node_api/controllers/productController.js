const db = require("../models/conn");
const Product = db.products;
const Review = db.review;
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    publish: req.body.publish ? req.body.publish : false,
  };
  const product = await Product.create(info);
  res.status(200).json(product);
};
const home = async (req, res) => {
  res.status(200).json({ message: "Hello" });
};

const getAllProduct = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).send(products);
};
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, {
    where: {
      id: id,
    },
  });
  res.status(200).json(product);
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("Removed");
};

const getPublishProduct = async (req, res) => {
  const products = await Product.findAll({
    where: {
      publish: true,
    },
  });
};
module.exports = {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishProduct,
  home,
};
