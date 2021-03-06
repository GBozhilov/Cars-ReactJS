const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/cars', feedController.getCars);
router.post('/car/create', feedController.createCar);
router.delete('/car/delete/:carId', feedController.deleteCar);
router.put('/car/edit/:carId', feedController.editCar);



module.exports = router;