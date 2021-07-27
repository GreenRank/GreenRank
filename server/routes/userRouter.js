const { userController } = require('../controllers/userController')
const { Router } = require('express');

const router = Router();

// route to store user in DB
// router.post(
//   'userInfo',
//   userController.createUserWithGoogleId,
//   (req, res) => res.status(200).json({ userInfo: res.locals.info })
// )



module.exports = router;