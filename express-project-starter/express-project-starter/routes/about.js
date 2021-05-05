const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');








router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    res.render('about')
}));

module.exports = router;
