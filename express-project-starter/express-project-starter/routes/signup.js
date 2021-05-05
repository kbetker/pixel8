const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');
const { loginUser } = require('../auth');
const bcrypt = require('bcrypt')


const userValidators = [
    check('fullName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for your full name.')
        .isLength({ max: 255 })
        .withMessage('Full name must not be more than 255 characters long'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom((value) => {
            return db.Pixel_User.findOne({ where: { emailAddress: value } })
                .then((Pixel_User) => {
                    if (Pixel_User) {
                        return Promise.reject('The provided Email Address is already in use by another account');
                    }
                });
        }),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for your username.')
        .isLength({ max: 255 })
        .withMessage('Username must not be longer than 255 characters.')
        .custom((value) => {
            return db.Pixel_User.findOne({ where: { username: value } })
                .then((Pixel_User) => {
                    if (Pixel_User) {
                        return Promise.reject('The provided username is already in use by another account, please select another username.')
                    }
                });
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 255 })
        .withMessage('Password must not be more than 255 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 255 })
        .withMessage('Confirm Password must not be more than 255 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }),
];

router.get('/signup', csrfProtection, asyncHandler(async (req, res, next) => {
    res.send('user-signup', {title: 'Sign-up', csrfToken: req.csrfToken()});
}));


router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res, next) => {
    const { fullName, email, password, username } = req.body;
    const user = db.Pixel_User.create({
        fullName,
        email,
        username
    });

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 8);
        user.hashedPassword = hashedPassword;
        loginUser(req, res, user);
        res.redirect('/')
    }else{
        const errors = validatorErrors.array.map((error) => error.msg);
        res.render('users-signup', {title: 'Sign-up', user, errors, csrfToken: req.csrfToken()});
    }
}));

module.exports = router;
