const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const StudentController = require('../controllers/StudentController');
router.get('/student-add-data', StudentController.addData);
module.exports = router;