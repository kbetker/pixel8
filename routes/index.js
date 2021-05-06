var express = require('express');
var router = express.Router();
const {Pixel_Story, Pixel_Category, Pixel_User, Pixel_Like} = require('../db/models')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pixel8: Your source for the latest Game info!' });
});


router.get('/homepage-stories', async (req, res) => {
  const pixel_stories = await Pixel_Story.findAll( {
    include: [Pixel_Category, Pixel_User],

    limit: 10,
  } )


  res.send(pixel_stories);

})



module.exports = router;
