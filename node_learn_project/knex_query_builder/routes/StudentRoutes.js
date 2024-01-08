const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const StudentController = require('../controllers/StudentController');
router.get('/add-data', StudentController.addData);
router.get('/get-all-student', StudentController.getAllStudent);
router.get('/get-student-data', StudentController.getStudentData);
router.get('/get-student-data-1', StudentController.getStudentData_1);
module.exports = router;