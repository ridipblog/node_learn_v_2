const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const StudentController = require('../controllers/StudentController');
// Add Data
router.get('/one-to-one-add-data', StudentController.addData);
// Find By Email
router.get('/one-to-one-find-by-email', StudentController.findByEmail);
// Find By EMail And With Incldue Model Where
router.get('/one-to-one-find-by-email-1', StudentController.findByEmailOther1);
// Find By Email And With Operation
router.get('/one-to-one-find-by-email-2', StudentController.findByEmailOther2);
module.exports = router;
