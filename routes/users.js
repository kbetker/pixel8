const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser, requireAuth } = require('../auth');
const db = require('../db/models');
const { Op } = require("sequelize");
const blueBird = require('bluebird');

blueBird.config({
    longStackTraces: true
});

const loginValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your Username')
    .isLength({ max: 255 })
    .withMessage('Username must not be more than 255 characters long'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter you password')
    .isLength({ max: 100 })
    .withMessage('Password must not be more than 100 characters long')
];

const userValidators = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for your full name.')
    .isLength({ max: 255 })
    .withMessage('Full name must not be more than 255 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 255 })
    .withMessage('Password must not be more than 255 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 255 })
    .withMessage('Confirm Password must not be more than 255 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  const users = await db.Pixel_User.findAll();
  res.render('users-list', { users });
}));

/* GET user page. */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = await db.Pixel_User.findByPk(userId, {
    include: [
      { model: db.Pixel_Story },
      { model: db.Pixel_User, as: "followings" },
      { model: db.Pixel_User, as: "followers" },
      { model: db.Pixel_Comment },
    ]
  });

  if (res.locals.user) {
    const sessionUser = res.locals.user;
    const following = user.followers.some(element => {
      return element.id === res.locals.user.id
    })
    res.render('user', { user, sessionUser, following, title: `Welcome to ${user.fullName}'s page!`, csrfToken: req.csrfToken() });
  } else {
    res.render('user', { user, title: `Welcome to ${user.fullName}'s page!`, csrfToken: req.csrfToken() });
  }
}));

/* GET user edit page. */
router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = await db.Pixel_User.findByPk(userId);
  if (res.locals.user) {
    const sessionUser = res.locals.user;
    res.render('user-edit', { user, sessionUser, title: `Update your info`, csrfToken: req.csrfToken() });
  } else {
    res.render('user-edit', { user, title: `This is not your page lol`, csrfToken: req.csrfToken() });
  }
}));

// /* POST user edit page. */
router.post('/:id(\\d+)/edit', requireAuth, csrfProtection, userValidators, asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const sessionUser = res.locals.user;
  const userToEdit = await db.Pixel_User.findByPk(userId);
  const { fullName, about, email } = req.body;
  const updatedUserInfo = { fullName, about, email };

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await userToEdit.update(updatedUserInfo);
    res.redirect(`/users/${userId}`);
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-edit', { updatedUserInfo, errors, sessionUser, csrfToken: req.csrfToken() });
  }
}));

router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res, next) => {
  try{
    const userId = parseInt(req.params.id, 10);

    const user = await db.Pixel_User.findByPk(userId);

    await db.Pixel_Follower.destroy({
      where:{
        [Op.or]: [
          {pixelFollowingId: userId},
          {pixelFollowerId: userId},
        ]
      }
    });
    // const storyIds = await story.map(function(value) {
    //   return value.id;
    // });
    await user.destroy({truncate: true}, {cascade: true});
    // await db.Pixel_Story.destroy({
    //   where:{
    //       authorId: userId,
    //     },
    //   },
    //   {truncate : true},);
    // await db.Pixel_Comment.destroy({
    //   where: {
    //     [Op.or]: [
    //       { pixelStoryId: storyIds },
    //       { pixelUserId: userId }
    //     ]
    //   }
    // });

    // await db.Pixel_Like.destroy({
    //   where: {
    //     [Op.or]: [
    //     {pixelStoryId: storyIds},
    //     {pixelUserId: userId},
    //     ]
    //   }
    // });





    //   const deletedUser = await db.Pixel_User.destroy({ where: { id: userId } })
    logoutUser(req, res);
    res.redirect('/');

  }catch(error){
    console.error(error);
  }
}));

/* Change following page. */
router.post('/:id(\\d+)/follow', csrfProtection, asyncHandler(async (req, res, next) => {
  const pixelFollowingId = parseInt(req.params.id, 10);
  const pixelFollowerId = res.locals.user.id;
  const follow = await db.Pixel_Follower.findOne({
    where: { pixelFollowingId, pixelFollowerId },
  });
  if (follow) {
    await follow.destroy();
  } else {
    await db.Pixel_Follower.create({ pixelFollowingId, pixelFollowerId });
  }
  res.redirect("back")
}));

/* GET login page. */
router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('users-login', { csrfToken: req.csrfToken() });
}));

/* POST login info. */
router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
  const {
    username,
    password,
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.Pixel_User.findOne({ where: { username } });
    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }

    errors.push('Login failed for the provided username and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }
  res.render('users-login', { username, errors, csrfToken: req.csrfToken() });
}));

/* GET logout page. */
router.get('/logout', (req, res) => {
  logoutUser(req, res); //
  res.redirect('/'); // I think the redirect sometimes takes place before deleting req.session.auth resulting in the user appearing to still be logged in.
});

module.exports = router;
