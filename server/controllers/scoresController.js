const { ScoresModel } = require('../models');
const fetch  = require('node-fetch')
const express = require('express')

class ScoresController {

  addUserResults(req, res, next) {
   const score = {
      "kg": 0,
      "mobility_kg": Math.random() * 1000,
      "consumption_kg": Math.random() * 1000,
      "household_kg": Math.random() * 1000,
      "public_services_kg": Math.random() * 1000,
      "price_in_eur_cents": 0,
      }
  //  const score = {
  //     "kg": 12238.475460077108,
  //     "mobility_kg": "5535.6713591286748",
  //     "consumption_kg": "2697.282654256381",
  //     "household_kg": "3795.5214466920533",
  //     "public_services_kg": "210.0",
  //     "price_in_eur_cents": 0,
  //     }
  score.kg = score.mobility_kg + score.consumption_kg + score.household_kg + score.public_services_kg;
    const curUserGoogleId = req.cookies.greenRankCurrentUser0001;

    //get score results from api
    // fetch('https://api.myclimate.org/v1/footprint_calculators.json',{
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(req.body),
    //   })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   score = data;
    // })
    // .catch(err=>console.log(err))
    
    
    // let { score } = req.body;
    
    ScoresModel.addResults(curUserGoogleId, score)
    .then((data) => {
      res.locals.score = score;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
    // };
  }

  // getAllResultsById(req, res, next) {
  //   const { id } = req.params;
  //   res.cookies.
  //   ScoresModel.getResultsById(id)
  //     .then((data) => {
  //       console.log('DATA.ROWS FOR USERS RESULTS -> ', data.rows)
  //       const results = data.rows;
  //       if(!results.length) return res.locals.newUser = true;
  //       res.locals.results = results;
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next({err});
  //     })
  // };

  getAllResultsByGoogleId(req, res, next) {
    const googleId = req.cookies.greenRankCurrentUser0001;

    ScoresModel.getResultsByGoogleId(googleId)
      .then((data) => {
        console.log('DATA.ROWS FOR SINGLE USER -> ', data.rows)
        const results = data.rows;
        console.log('RESULTS -> ', results)
        res.locals.results = results;
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
        data.rows.forEach(({name, score}) => {
          if(!ranks[name]) ranks[name] = score;
          ranks[name] = Math.min(ranks[name], score);
        });
        res.locals.ranks = ranks;
        return next();
      })
      .catch((err) => {
        return next({err});
      })
  };

};

const scoresController = new ScoresController();

module.exports = {
  scoresController
}