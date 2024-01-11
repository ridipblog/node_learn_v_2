const router = require('express').Router();
const CoderController = require('../controllers/CoderController');
router.get('/add-coders', CoderController.addCoder);
// Add Data With Transaction
router.get('/add-data-with-transaction', CoderController.addCoderWithTransaction);
// find all coders data
router.get('/find-all-coder-data', CoderController.findAllCoderData);
// find one coder data
router.get('/find-one-coder-data', CoderController.findOneCoder);
module.exports = router;
