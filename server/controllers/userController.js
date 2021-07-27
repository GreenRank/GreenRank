const { UserModel } = require('../models');

class UserController {

  createUserWithGoogleId(req, res, next) {
    const { googleId } = req.body;
    UserModel.createUserWithGoogleId(googleId)
      .then((data) => {
        res.locals.googleId = googleId
        return next();
      })
      .catch((err) => {
        return next({err});
      })
  }

  getUserById(req, res, next) {
    UserModel.getUserById(req.params.id)
      .then((data) => {
        const user = data.rows[0];
        if (!user) {
          return next({
            status: 400,
            message: 'User not found'
          })
        }
        res.locals.user = user;
        return next();
      })
      .catch((err) => {
        return next({err})
      })
  };
  
  getUserByGoogleId(req, res, next) {
    UserModel.getUserByGoogleId(res.locals.googleUser.id)    //! get this from auth controller
      .then((data) => {
        const user = data.rows[0];
        if (!user) {
          return next({
            status: 400,
            message: 'User not found'
          })
        }
        res.locals.user = user;
        return next();
      })
      .catch((err) => {
        return next({err});
      });
  };

  //update user
}

const userController = new UserController();

module.exports = {
  userController
}