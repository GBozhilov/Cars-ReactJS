const {validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const encryption = require('../util/encryption');

function validateUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            message: 'Validation Failed Entered Data Is Incorrect',
            errors: errors.array()
        });
        return false;
    }

    return true;
}

module.exports = {
    signUp: (req, res, next) => {

        if (validateUser(req, res)) {
            const {username, password, email} = req.body;
            const salt = encryption.generateSalt();
            const hashedPassword = encryption.generateHashedPassword(salt, password);

            User.create({
                email,
                hashedPassword,
                username,
                salt
            }).then((user) => {
                res.status(201)
                    .json({message: 'User Created', userId: user._id, username: user.username});
            })
                .catch((error) => {
                    if (!error.statusCode) {
                        error.statusCode = 500;
                    }

                    next(error);
                });
        }
    },
    signIn: (req, res, next) => {
        const {username, password} = req.body;

        User.findOne({username})
            .then((user) => {
                if (!user) {
                    const error = new Error('An User With This Username Could Not Be Found');
                    error.statusCode = 401;
                    throw error;
                }

                if (!user.authenticate(password)) {
                    const error = new Error('An User With This Password Could Not Be Found');
                    error.statusCode = 401;
                    throw error;
                }

                const token = jwt.sign({
                        username: user.username,
                        userId: user._id.toString()
                    }
                    , 'somesupersecret'
                    , {expiresIn: '1h'});

                res.status(200).json(
                    {
                        message: 'User Successfully Logged In',
                        token,
                        userId: user._id.toString(),
                        username: user.username,
                        isAdmin: user.roles.indexOf('Admin') !== -1
                    });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }

                next(error);
            })
    }
};