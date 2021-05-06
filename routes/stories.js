const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Pixel_Story.findByPk(storyId, {
        include: [
        {model: db.Pixel_Comment,
          include: db.Pixel_User
        },
        {model: db.Pixel_User}
      ],
    });
    // const comments = await Pixel_Story
    // console.log(Pixel_Comment);
    console.log(story);
    res.render('stories', {story, csrfToken: req.csrfToken()});
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
