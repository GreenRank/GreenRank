const { ScoresModel } = require('../models');

class ScoresController {
  getAllScoresById(req, res, next) {
    const { id } = req.body
    ScoresModel.getScoresById(id)
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

  getAllScoresByGoogleId(req, res, next) {
    const { googleId } = req.body;
    ScoresModel.getScoresByGoogleId(googleId)
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

  addUserScore(req, res, next) {
    const { id, score } = req.body;
    ScoresModel.addScore(id, score)
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