const UserController = require('../controllers/UserController');
const router = require('express').Router();
router.post('/create', UserController.create);
router.get("/find_particula/:published", UserController.find_particula);
router.get('/find_email/:email', UserController.find_email);
router.post('/update/:email', UserController.update_data);
router.get('/delete/:email', UserController.deleteData);
module.exports = router;