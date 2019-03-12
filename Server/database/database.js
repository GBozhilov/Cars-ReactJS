const mongoose = require('mongoose');
const User = require('../models/User');
mongoose.Promise = global.Promise;

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/cars-system', {
        useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.once('open', err => {
        if (err) throw err;
        User.seedAdminUser().then(() => {
            console.log('Database Ready');
        }).catch((reason) => {
            console.log('Something Went Wrong');
            console.log(reason);
        });
    });

    db.on('error', reason => {
        console.log(reason);
    });
};