const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const StudentController = require('../controllers/StudentController');
// Besic Database Query
router.get('/add-data', StudentController.addData);
router.get('/get-all-student', StudentController.getAllStudent);
router.get('/get-student-data', StudentController.getStudentData);
router.get('/get-student-data-1', StudentController.getStudentData_1);

// Notification Method
module.exports = router;
