const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');


router.get(`/${userId}`, csrfProtection, asyncHandler(async (req, res, next) => {
    res.render('respond with a resource');
}));


router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

}));

module.exports = router;
