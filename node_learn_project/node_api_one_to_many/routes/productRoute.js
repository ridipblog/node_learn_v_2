const productController = require("../controllers/productController");
const reviewController = require("../controllers/reviewController");
const router = require("express").Router();
router.post("/addProduct", productController.addProduct);
router.get("/getAllProduct", productController.getAllProduct);

// Review Controller Route

router.post("/addReview", reviewController.addReview);
router.get("/getAllReview", reviewController.getAllReview);

router.get("/getOneProduct/:id", productController.getOneProduct);
router.get("/getPublishProduct", productController.getPublishProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProrduct/:id", productController.deleteProduct);

router.get("/getProductReview", productController.getProductReview);

router.get("/home", productController.home);
module.exports = router;
