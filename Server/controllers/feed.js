const Car = require('../models/Car');

module.exports = {
    getCars: (req, res) => {
        Car.find()
            .then((cars) => {
                res
                    .status(200)
                    .json({message: 'All Cars', cars});
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    createCar: (req, res) => {
        const carObj = req.body;

        Car.create(carObj)
            .then((car) => {
                res.status(200)
                    .json({
                        message: 'Car Created Successfully',
                        car
                    })
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    deleteCar: (req, res, next) => {
        const carId = req.params.carId;

        Car.findById(carId)
            .then((car) => {
                if (!car) {
                    const error = new Error('Car Not Found');
                    error.statusCode = 404;
                    throw error;
                }

                return Car.findByIdAndDelete(carId);
            })
            .then(() => {
                res.status(200)
                    .json({
                        message: 'Car Deleted Successfully'
                    })
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }

                next(error);
            });
    },
    editCar: (req, res) => {
        const carId = req.body.car._id;
        const car = req.body;

        Car.findById(carId)
            .then((c) => {
                if (!c) {
                    const error = new Error('Car Not Found');
                    error.statusCode = 404;
                    throw error;
                }

                c.brand = car.brand;
                c.model = car.model;
                c.year = car.year;
                c.engine = car.engine;
                c.price = car.price;
                c.description = car.description;
                c.image = car.image;
                c.videoUrl = car.videoUrl;

                return c.save();
            })
            .then((c) => {
                if (c) {
                    res.status(200).json({
                        message: 'Car Updated',
                        car: c
                    })
                }
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }

                //next(error);
            });
    }
};