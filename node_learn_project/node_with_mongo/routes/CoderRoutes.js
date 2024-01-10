const router = require('express').Router();
const CoderController = require('../controllers/CoderController');
router.get('/add-coders', CoderController.addCoder);
// Add Data With Transaction
router.get('/add-data-with-transaction', CoderController.addCoderWithTransaction);
module.exports = router;
