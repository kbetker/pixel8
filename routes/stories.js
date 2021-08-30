const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection} = require('../utils.js')
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
      { model: db.Pixel_User },
      { model: db.Pixel_Like },
      { model: db.Pixel_Category }
    ],
  });
  console.log(story.Pixel_Likes)
  if(!story){
    res.render('404');
    return;
  }
  if (res.locals.user) {

    const sessionUser = res.locals.user;

    const likeStatus = story.Pixel_Likes.some((like) =>  like.pixelUserId === sessionUser.id)

    res.render('stories', { story, sessionUser, likeStatus,  csrfToken: req.csrfToken() });
  } else {
    res.render('stories', { story, csrfToken: req.csrfToken() });
  }

}));

router.post('/:id(\\d+)/delete', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id, 10);
  const sessionUser = res.locals.user;
  const story = await db.Pixel_Story.findByPk(storyId, {
    include: [
      {
        model: db.Pixel_Comment,
        include: [db.Pixel_User],
      },
      { model: db.Pixel_User },
      { model: db.Pixel_Like }
    ],
  });
  if(!story){
    res.render('404');
    return;
  }
  await db.Pixel_Comment.destroy({
    where: {
      pixelStoryId: storyId
    }
  })
  await db.Pixel_Like.destroy({
    where: {
      pixelStoryId: storyId
    }
  })
  await db.Pixel_Story.destroy({
    where: {
      id: storyId
    }
  })
  res.redirect('/');
}));

router.post('/:id(\\d+)/edit', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id, 10);
  // const sessionUser = res.locals.user;
  const story = await db.Pixel_Story.findByPk(storyId, {
    include: [
      {
        model: db.Pixel_Comment,
        include: [db.Pixel_User],
      },
      { model: db.Pixel_User },
      { model: db.Pixel_Like },
      { model: db.Pixel_Category }
    ],
  });
  if(!story){
    res.render('404');
    return;
  }
  const categories = await db.Pixel_Category.findAll();
  if (res.locals.user) {
    const sessionUser = res.locals.user;
    res.render('edit-story', { story, sessionUser, categories, csrfToken: req.csrfToken() });;
  } else {
    res.render('edit-story', { story, categories, csrfToken: req.csrfToken() });;
  }

}));

router.post('/:id(\\d+)/comment-new', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const user = res.locals.user.dataValues;
    const storyId = parseInt(req.params.id, 10);
    const currStory = await db.Pixel_Story.findByPk(storyId);
    if(!currStory){
      res.render('404');
      return;
    }
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
    if(!comment){
      res.render('404');
      return;
    }
    res.render('edit-comment', { comment, csrfToken: req.csrfToken() });


  }));

router.post('/:id(\\d+)/comments/:comment_id(\\d+)/edit', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.comment_id, 10);
    const commentToUpdate = await db.Pixel_Comment.findByPk(commentId);
    const { body } = req.body;
    if(!commentToUpdate){
      res.render('404');
      return;
    }
    await commentToUpdate.update({ pixelStoryId: commentToUpdate.pixelStoryId, pixelUserId: commentToUpdate.pixelUserId, body });
    res.redirect(`/stories/${commentToUpdate.pixelStoryId}`);


  }));



router.post('/:id(\\d+)/comments/:comment_id(\\d+)/delete', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const commentId = parseInt(req.params.comment_id, 10);
    const comment = await db.Pixel_Comment.findByPk(commentId);
    if(!comment){
      res.render('404');
      return;
    }
    const { body } = req.body;
    await comment.destroy();
    res.redirect(`/stories/${storyId}`)
  }));

router.post(`/:id(\\d+)/edited-story`, requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const { title, summary, body, imageUrl, categoryId } = req.body;
    await db.Pixel_Story.update({ title, summary, body, imageUrl, categoryId },
      {
        where:
        {
          id: storyId
        }
      });
    res.redirect(`/stories/${storyId}`)
  }));

router.post('/:id(\\d+)/likes', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const sessionUser = res.locals.user;
    const userLikesStory = await db.Pixel_Like.findOne({
      where: {
        pixelUserId: sessionUser.id,
        pixelStoryId: storyId
      }
    });
    if (userLikesStory) {
      await userLikesStory.destroy();
    } else {
      await db.Pixel_Like.create({
        pixelUserId: sessionUser.id,
        pixelStoryId: storyId
      });
    }
    res.redirect(`/stories/${storyId}`)
  }));

module.exports = router;
