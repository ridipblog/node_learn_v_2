const router = require('express').Router();
const OrderController = require('../controller/OrderController');
router.post('/add', OrderController.create);
router.get('/search', OrderController.findOrders);
module.exports = router;