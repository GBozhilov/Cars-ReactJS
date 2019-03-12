const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/cars', feedController.getCars);
router.post('/car/create', feedController.createCar);

module.exports = router;