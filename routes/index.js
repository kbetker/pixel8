const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('../utils.js')





/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  if (res.locals.user) {
    // const userId = parseInt(req.params.id, 10);
    const sessionUser = res.locals.user;

    res.render('index', { sessionUser, title: 'Pixel8: Your source for the latest Game info!' });
  } else {
    res.render('index', { title: 'Pixel8: Your source for the latest Game info!' });
  }
}));


router.get('/homepage-stories', async (req, res) => {
  const pixel_stories = await db.Pixel_Story.findAll({
    include: [db.Pixel_Category, db.Pixel_User],
    limit: 10,
  })

  res.send(pixel_stories);
});


router.get('/storiesByGenre/:id', async (req, res) => {
  const genre = req.params.id
  const pixel_stories = await db.Pixel_Story.findAll({
    where: { genre: genre },
    include: [db.Pixel_Category, db.Pixel_User],
    limit: 10,
  })
  res.send(pixel_stories);
})


router.get('/stories/trending', async (req, res) => {
  const pixel_stories = await db.Pixel_Story.findAll({
    include: [db.Pixel_Like, db.Pixel_User],
  })
  res.send(pixel_stories)
})


module.exports = router;
