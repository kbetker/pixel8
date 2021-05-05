const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const { Pixel_Like, Pixel_Comment, Pixel_Story } = require('../db/models');
const { restoreUser } = require('../auth.js');

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await Pixel_Story.findByPk(storyId, {
        include: Pixel_Comment
    });
    const comments = story.Pixel_Comments;
    // res.json(story.Pixel_Comment)
    console.log(comments);
    res.render('article', {story})
}));


// router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

// }));
module.exports = router;
