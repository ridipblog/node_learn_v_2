const router = require('express').Router();
const ProductController = require('../controller/ProductController');
router.post("/add_product", ProductController.create);
module.exports = router;