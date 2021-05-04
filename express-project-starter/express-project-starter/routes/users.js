const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { asyncHandler, csrfProtection } = require('../utils.js')
const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser } = require('../auth');

const loginValidators = [
  check('Username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your Username')
    .isLength({ max: 255 })
    .withMessage('Username must not be more than 255 characters long'),
  check('Password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter you password')
    .isLength({ max: 100 })
    .withMessage('Password must not be more than 100 characters long')
];

/* GET users listing. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  res.send('respond with a resource');
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('users-login', { csrfToken: req.csrfToken() });
}));

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

  res.render('users-login', username, errors, { csrfToken: req.csrfToken() });
}));



router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});

module.exports = router;
