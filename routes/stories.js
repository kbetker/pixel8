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
      {
        model: db.Pixel_Comment,
        include: [db.Pixel_User],
      },
      { model: db.Pixel_User},
      { model: db.Pixel_Like}
    ],
  });
  console.log(story.Pixel_Likes.length);
  res.render('stories', { story, csrfToken: req.csrfToken() });
}));




router.post('/:id(\\d+)/comment-new', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const user = res.locals.user.dataValues;
    const storyId = parseInt(req.params.id, 10);
    const currStory = await db.Pixel_Story.findByPk(storyId);

    const comment = await db.Pixel_Comment.create({
      pixelStoryId: storyId,
      pixelUserId: res.locals.user.id,
      body
    });
    res.redirect(`/stories/${storyId}`);

  }));


// router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

// }));

router.post(`/:id(\\d+)/comments/:comment_id(\\d+)`, requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {

    const storyId = parseInt(req.params.id, 10);
    const commentId = parseInt(req.params.comment_id, 10);
    const comment = await db.Pixel_Comment.findByPk(commentId);

    if (req.body.action && req.body.action == "delete") {
      await comment.destroy();
      res.redirect(`/stories/${storyId}`)
    }
    else if (req.body.action && req.body.action === "edit") {
      console.log(`Is this the correct comment id? ${comment.id}`)
      res.render('edit-comment', {comment, csrfToken: req.csrfToken()});
    }

  }));

  router.post('/:id(\\d+)/comments/:comment_id(\\d+)/edit', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.comment_id, 10);
    const commentToUpdate = await db.Pixel_Comment.findByPk(commentId);
    const {body} = req.body;
    console.log(commentToUpdate);
    await commentToUpdate.update({pixelStoryId: commentToUpdate.pixelStoryId, pixelUserId:commentToUpdate.pixelUserId, body});
    console.log(commentToUpdate.body);
    res.redirect(`/stories/${commentToUpdate.pixelStoryId}`);
    // const storyId = parseInt(req.params.id, 10);
    // const currStory = await db.Pixel_Story.findByPk(storyId);

    // const comment = await db.Pixel_Comment.create({
    //   pixelStoryId: storyId,
    //   pixelUserId: res.locals.user.id,
    //   body
    // });
    //

  }));

  router.post('/articles/:id/likes', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const story = await db.Pixel_Story.findByPk(storyId, {
      include: [
        {
          model: db.Pixel_Like,
          include: db.Pixel_User
        },
        { model: db.Pixel_User }
      ],
    });
    const storyId = parseInt(req.params.id, 10);
    console.log(storyId);
  }));

module.exports = router;
