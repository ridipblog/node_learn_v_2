const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const SearchController = require('../controllers/SearchController');
router.get('/search-add-data', SearchController.addData);
router.post('/on-input-search-frist', SearchController.onInputSearchFrist);
router.post('/on-input-search-second', SearchController.onInputSearchSecond);
module.exports = router;
