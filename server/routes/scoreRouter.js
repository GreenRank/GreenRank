const { userController } = require('../controllers/userController');
const { Router } = require('express');
const { ScoresModel } = require('../models');
const { scoresController } = require('../controllers/scoresController');

const router = Router();

// get all scores from all users; frontend will sort
router.get(
  '/ranks',
  scoresController.getRanks,
  (req, res) => res.status(200).json({ ranks: res.locals.ranks })
);

// get all scores for a single user
router.get(
  '/getUserScores',
  scoresController.getAllResultsByGoogleId,
  (req, res) => res.status(200).json({ scores: res.locals.scores })
);