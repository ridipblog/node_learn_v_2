const router = require('express').Router();
const CoderController = require('../controllers/CoderController');
router.get('/add-coders', CoderController.addCoder);
// Add Data With Transaction
router.get('/add-data-with-transaction', CoderController.addCoderWithTransaction);
// find all coders data
router.get('/find-all-coder-data', CoderController.findAllCoderData);
// find one coder data
router.get('/find-one-coder-data', CoderController.findOneCoder);
router.get('/find-one-coder-data-2', CoderController.findOneCoder2);
// delete all coder data
router.get('/delete-all-coder-data', CoderController.deleteAllCoders);
module.exports = router;
