const { ScoresModel } = require('../models');

class ScoresController {
  // if using regular authentication
  // getAllResultsById(req, res, next) {
  //   const { id } = req.body
  //   ScoresModel.getResultsById(id)
  //     .then((data) => {
  //       const scores = data.rows;
  //       if(!scores.length) return res.locals.newUser = true;
  //       res.locals.scores = scores;
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next({err});
  //     })
  // };

  getAllResultsByGoogleId(req, res, next) {
    const { googleId } = req.body;
    ScoresModel.getResultsByGoogleId(googleId)
      .then((data) => {
        const scores = data.rows;
        if(!scores.length) return res.locals.newUser = true;
        res.locals.scores = scores;
        return next();
      })
      .catch((err) => {
        return next({err});
      })
  };

  getRanks(req, res, next) {
    ScoresModel.getAllScores()
      .then((data) => {
        const ranks = {};
        data.rows.forEach(({user_id, score}) => {
          ranks[user_id] = Math.max(ranks[user_id], score);
        });
        res.locals.ranks = ranks;
      })
      .catch((err) => {
        return next({err});
      })
  };

  addUserResults(req, res, next) {
    const { id, score } = req.body;
    ScoresModel.addResults(id, score)
      .then((data) => {
        res.locals.score = score;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };
};

const scoresController = new ScoresController();

module.exports = {
  scoresController
}