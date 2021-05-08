const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');








router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    if (res.locals.user) {
        // const userId = parseInt(req.params.id, 10);
        const sessionUser = await db.Pixel_User.findByPk(res.locals.user.id)

        res.render('about', { sessionUser });
    } else {
        res.render('about');
    }
}));

module.exports = router;
