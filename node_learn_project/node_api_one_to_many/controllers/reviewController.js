const db = require("../models/conn");
const Review = db.review;

const addReview = async (req, res) => {
  let data = {
    rating: req.body.rating,
    description: req.body.description,
    product_id: req.body.product_id,
  };
  const review = await Review.create(data);
  res.status(200).json(review);
};
const getAllReview = async (req, res) => {
  const review = await Review.findAll({});
  res.status(200).json(review);
};
module.exports = {
  addReview,
  getAllReview,
};
