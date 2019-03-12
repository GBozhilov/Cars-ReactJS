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
    }
};