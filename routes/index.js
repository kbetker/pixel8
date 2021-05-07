const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const { Pixel_Story, Pixel_Category, Pixel_User, Pixel_Like } = require('../db/models')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Pixel8: Your source for the latest Game info!' });
});


router.get('/homepage-stories', async (req, res) => {
  const pixel_stories = await Pixel_Story.findAll({
    include: [Pixel_Category, Pixel_User],
    limit: 10,
  })

  res.send(pixel_stories);
});


router.get('/storiesByGenre/:id', async (req, res) => {
  const genre = req.params.id
  const pixel_stories = await Pixel_Story.findAll({
    where: { genre: genre },
    include: [Pixel_Category, Pixel_User],
    limit: 10,
  })
  res.send(pixel_stories);
})


router.get('/stories/trending', async (req, res) => {
  const pixel_stories = await Pixel_Story.findAll({
    include: [Pixel_Like, Pixel_User],
  })
  res.send(pixel_stories)
})


module.exports = router;
