const productController = require("../controllers/productController");
const router = require("express").Router();
router.post("/addProduct", productController.addProduct);
router.get("/getAllProduct", productController.getAllProduct);
router.get("/getOneProduct/:id", productController.getOneProduct);
router.get("/getPublishProduct", productController.getPublishProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProrduct/:id", productController.deleteProduct);

router.get("/home", productController.home);
module.exports = router;
