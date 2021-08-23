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
        .withMessage('Please link an image for your story'),
    // .isURL({ protocols: ['http', 'https', 'ftp'] })
    // .withMessage('image can only be submitted via a url link'),
    check('genre')
        .exists({ checkFalsy: true })
        .withMessage('Please select a genre for your article'),
    check('categoryId')
        .exists({ checkFalsy: true })
        .withMessage('Please select a category for your article'),
];

router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    const categories = await db.Pixel_Category.findAll();
    const story = db.Pixel_Story.build();
    if (res.locals.user) {
        const sessionUser = res.locals.user;
        res.render('story-new', {
            title: 'Submit New Story',
            sessionUser,
            categories,
            story,
            csrfToken: req.csrfToken(),
        });
    } else {
        res.render('story-new', {
            title: 'Submit New Story',
            categories,
            story,
            csrfToken: req.csrfToken(),
        });
    }

}));

router.post('/new', csrfProtection, submitValidators, asyncHandler(async (req, res, next) => {
    const { title, summary, body, imageUrl, categoryId, genre, authorId, viewCount } = req.body

    let errors = [];
    const validatorErrors = validationResult(req);
    const newStory = await db.Pixel_Story.build({
        title, summary, body, imageUrl, categoryId, genre, authorId, viewCount
    })
    if (validatorErrors.isEmpty()) {
        await newStory.save();
        res.redirect(`/stories/${newStory.id}`);
    } else {
        errors = validatorErrors.array().map((error) => error.msg);
        res.render('story-new', { title, summary, body, imageUrl, categoryId, genre, errors, authorId, viewCount, csrfToken: req.csrfToken() });
    }
}));

module.exports = router;
