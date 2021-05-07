const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser, requireAuth } = require('../auth');
const db = require('../db/models');

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
    const sessionUserId = res.locals.user.dataValues.id;
    res.render('user', { user, sessionUserId, title: `Welcome to ${user.fullName}'s page!`, csrfToken: req.csrfToken() });
  } else {
    res.render('user', { user, title: `Welcome to ${user.fullName}'s page!`, csrfToken: req.csrfToken() });
  }

}));

/* PATCH update to user page. */
router.patch('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = await db.Pixel_User.findByPk(userId, {
    include: [
      { model: db.Pixel_Story },
      { model: db.Pixel_Follower },
      { model: db.Pixel_Comment },
      { model: db.Pixel_Like }
    ]
  });
  res.render('user', { user, csrfToken: req.csrfToken() });
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
  logoutUser(req, res);
  res.redirect('/');
});

module.exports = router;
