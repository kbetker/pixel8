const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');

const submitValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a title for your story')
        .isLength({ max: 100 })
        .withMessage('Title must not be more than 100 characters long'),
    check('summary')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a summary of your story')
        .isLength({ max: 255 })
        .withMessage('Summary must not be more than 255 characters long'),
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please enter the story you want to tell'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please link an image for your story')
        .isURL({ protocols: ['http', 'https', 'ftp'] })
        .withMessage('image can only be submitted via a url link'),
    check('genre')
        .exists({ checkFalsy: true })
        .withMessage('Please select a genre for your article'),
    check('categoryId')
        .exists({ checkFalsy: true })
        .withMessage('Please select a category for your article'),
];

router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    const story = db.Pixel_Story.build();
    res.render('story-new', {
        title: 'Submit',
        story,
        csrfToken: req.csrfToken(),
    });
}));


// router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

// }));

module.exports = router;
