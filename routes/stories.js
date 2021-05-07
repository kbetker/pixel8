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
  console.log(story);
  res.render('stories', { story, csrfToken: req.csrfToken() });
}));

router.post('/:id(\\d+)/delete', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id, 10);
  const sessionUserId = res.locals.user.dataValues.id;
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
  await db.Pixel_Comment.destroy({where: {
    pixelStoryId: storyId
  }})
  await db.Pixel_Like.destroy({where: {
    pixelStoryId: storyId
  }})
  await db.Pixel_Story.destroy({where: {
    id: storyId
  }})



  res.redirect('/');
}));

router.post('/:id(\\d+)/edit', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id, 10);
  const sessionUserId = res.locals.user.dataValues.id;
  const story = await db.Pixel_Story.findByPk(storyId, {
    include: [
      {
        model: db.Pixel_Comment,
        include: [db.Pixel_User],
      },
      { model: db.Pixel_User},
      { model: db.Pixel_Like},
      { model: db.Pixel_Category}
    ],
  });
  const categories = await db.Pixel_Category.findAll();
  res.render('edit-story', {sessionUserId, categories, story, csrfToken: req.csrfToken()});
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

router.post(`/:id(\\d+)/comments/:comment_id(\\d+)`, requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {

    const storyId = parseInt(req.params.id, 10);
    const commentId = parseInt(req.params.comment_id, 10);
    const comment = await db.Pixel_Comment.findByPk(commentId);
    console.log(`Is this the correct comment id? ${comment.id}`)
    res.render('edit-comment', {comment, csrfToken: req.csrfToken()});


  }));

  router.post('/:id(\\d+)/comments/:comment_id(\\d+)/edit', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.comment_id, 10);
    const commentToUpdate = await db.Pixel_Comment.findByPk(commentId);
    const {body} = req.body;

    await commentToUpdate.update({pixelStoryId: commentToUpdate.pixelStoryId, pixelUserId:commentToUpdate.pixelUserId, body});
    res.redirect(`/stories/${commentToUpdate.pixelStoryId}`);


  }));



  router.post('/:id(\\d+)/comments/:comment_id(\\d+)/delete', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const commentId = parseInt(req.params.comment_id, 10);
    const comment = await db.Pixel_Comment.findByPk(commentId);
    const {body} = req.body;
    await comment.destroy();
    res.redirect(`/stories/${storyId}`)
  }));



  router.post('/:id(\\d+)/likes', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const sessionUserId = res.locals.user.dataValues.id;
    const userLikesStory = await db.Pixel_Like.findOne( {where: {
      pixelUserId: sessionUserId,
      pixelStoryId: storyId
    }});
    if(userLikesStory){
      await userLikesStory.destroy();
    }else{
      const like = await db.Pixel_Like.create({
        pixelUserId: sessionUserId,
        pixelStoryId: storyId
      });
    }
    res.redirect(`/stories/${storyId}`)
  }));

module.exports = router;
