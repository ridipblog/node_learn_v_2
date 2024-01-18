const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const SearchController = require('../controllers/SearchController');
router.get('/search-add-data', SearchController.addData);
router.post('/on-input-search-frist', SearchController.onInputSearchFrist);
module.exports = router;
