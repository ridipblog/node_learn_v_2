const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const NotificationController = require('../controllers/NotificationController');
router.get('/notification-add-data', NotificationController.addTempData);
router.get('/all-notify', NotificationController.getAllNotification);
router.get('/get-specific-data', NotificationController.getSpecifcNotfification);
module.exports = router;
