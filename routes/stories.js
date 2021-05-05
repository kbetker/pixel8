const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const { Pixel_Like, Pixel_Comment, Pixel_Story, Pixel_User } = require('../db/models');
const pixel_user = require('../db/models/pixel_user.js');
const { requireAuth } = require('../auth');

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await Pixel_Story.findByPk(storyId, {
        include: Pixel_Comment
    });
    const user = await Pixel_User.findByPk(story.authorId);
    const comments = story.Pixel_Comments;
    console.log(story);
    res.render('stories', {user, story, csrfToken: req.csrfToken()});
}));




router.post('/:id(\\d+)/comment-new', requireAuth,  csrfProtection,
  asyncHandler(async (req, res) => {
    const {body} = req.body;
    const user = res.locals.user.dataValues;
    const storyId = parseInt(req.params.id, 10);
    const currStory = await Pixel_Story.findByPk(storyId);
    const comment = await Pixel_Comment.create({
        pixelStoryId: storyId,
        pixelUserId: res.locals.user.id,
        body
    });

    console.log(Pixel_Story);
    console.log(comment)
    res.redirect(`/stories/${storyId}`);

  }));


// router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

// }));
module.exports = router;
