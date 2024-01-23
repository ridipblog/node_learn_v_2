const router = require('express').Router();
const JoinController = require('../controllers/JoinController');
// ------------ add data ---------------------
router.get('/add-join-data', JoinController.addData);
// -------------- find all data ------------------
router.get('/find-all-data', JoinController.findAllData);
// ------------------find one author data------------
router.get('/find-one-author', JoinController.findOneAuthor);
module.exports = router;
