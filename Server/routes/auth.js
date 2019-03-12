const router = require('express').Router();
const {body} = require('express-validator/check');
const authController = require('../controllers/auth');
const User = require('../models/User');

router.post('/signup',
    [
        // TODO: Add normalize email and check
        body('email')
            .isEmail()
            .withMessage('Please Enter A Valid Email')
            .custom((value, {req}) => {
                return User.findOne({email: value}).then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('Email Address Already Exists');
                    }
                })
            }),
        body('password')
            .trim()
            .isLength({min: 6})
            .withMessage('Please Enter A Valid Password'),
        body('username')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please Enter A Valid Username')
    ]
    , authController.signUp);

router.post('/signin', authController.signIn);

module.exports = router;
