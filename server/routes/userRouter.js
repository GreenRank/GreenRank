const { userController } = require('../controllers/userController')
const { Router } = require('express');

const router = Router();

// route to store user in DB
//! DO WE EVEN NEED A USERS TABLE???
router.post(
  'createUser',
  userController.createUserWithGoogleId,
  (req, res) => res.status(200).json({ googleId: res.locals.googleId })
)