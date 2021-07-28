const { ScoresModel } = require('../models');
const fetch  = require('node-fetch')
const express = require('express')

class ScoresController {

  addUserResults(req, res, next) {
   const score = {
      "kg": 12238.475460077108,
      "mobility_kg": "2535.6713591286748",
      "consumption_kg": "6697.282654256381",
      "household_kg": "1795.5214466920533",
      "public_services_kg": "1210.0",
      "price_in_eur_cents": 0,
      // "input_params": {
      // "mobility_vehicles": "high",
      // "mobility_flight": "medium",
      // "consumption_food": "giant",
      // "consumption_shopping": "high",
      // "household_area": "low",
      // "household_building": "high",
      // "household_heating": "high"
      // }
      }
    const curUserGoogleId = req.cookies.greenRankCurrentUser0001;
    console.log(curUserGoogleId);

    //get score results from api
    console.log("addUserResults middleware", req.body);
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

  getAllResultsById(req, res, next) {
    console.log('heres the req.params obj: ', req.params)
    const { id } = req.params;
    ScoresModel.getResultsById(id)
      .then((data) => {
        console.log('DATA.ROWS FOR USERS RESULTS -> ', data.rows)
        const results = data.rows;
        if(!results.length) return res.locals.newUser = true;
        res.locals.results = results;
        return next();
      })
      .catch((err) => {
        return next({err});
      })
  };

  getAllResultsByGoogleId(req, res, next) {
    console.log('heres the req.params obj: ', req.params)
    const { googleId } = req.params;
    ScoresModel.getResultsByGoogleId(googleId)
      .then((data) => {
        console.log('DATA.ROWS FOR USERS RESULTS -> ', data.rows)
        const results = data.rows;
        if(!results.length) return res.locals.newUser = true;
        res.locals.results = results;
        return next();
      })
      .catch((err) => {
        return next({err});
      })
  };

  getRanks(req, res, next) {
    console.log('inside getRanks in scoresController')
    ScoresModel.getAllScores()
      .then((data) => {
        const ranks = {};
        console.log('data.rows', data.rows)
        data.rows.forEach(({name, score}) => {
          if(!ranks[name]) ranks[name] = score;
          ranks[name] = Math.min(ranks[name], score);
        });
        console.log(ranks);
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