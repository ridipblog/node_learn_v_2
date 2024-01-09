const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const NotificationController = require('../controllers/NotificationController');
router.get('/notification-add-data', NotificationController.addData);
// Get All Notification
router.get('/get-all-notify', NotificationController.getAllNotification);
// Get Notification By District And Block
router.get('/get-dist-blk-notify', NotificationController.getDistBlkNotify);
// Get Notification By District And Block 2
router.get('/get-dist-blk-notify-2', NotificationController.getDistBlkNotify_2);
module.exports = router;
