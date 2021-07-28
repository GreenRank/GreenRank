const { userController } = require('../controllers/userController');
const { Router } = require('express');
const { ScoresModel } = require('../models');
const { scoresController } = require('../controllers/scoresController');

const router = Router();

// post the questionnaire results from the current user
router.post(
  "/",
  scoresController.addUserResults,
  (req, res) => {
    res.status(200).json({ message: 'Questionnaire Posted!' })
  }
)

// get all scores from all users; frontend will sort
router.get(
  '/ranks',
  scoresController.getRanks,
  (req, res) => res.status(200).json({ ranks: res.locals.ranks })     // ranks is an object; frontend will sort
);

// get all scores for a single user
router.get(
  '/getUserResults',
  scoresController.getAllResultsById,
  // scoresController.getAllResultsByGoogleId,
  (req, res) => res.status(200).json({ results: res.locals.results })
);

module.exports = router;