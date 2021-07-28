// models/scores.js will declare all functions involving scores

const pool = require('./db');

class Scores {
  createTable() {
    console.log('inside of Scores class - create table function')
    const query = `
      CREATE TABLE IF NOT EXISTS
      scores (
        id serial PRIMARY KEY,
        googleId varchar NOT NULL,
        score varchar NOT NULL,
        mobility_vehicles varchar NOT NULL,
        consumption_food varchar NOT NULL,
        consumption_shopping varchar NOT NULL,
        household_area varchar NOT NULL,
        household_building varchar NOT NULL,
        household_heating varchar NOT NULL
      )`;
    return pool.query(query);
  };

  addResults(id, score) {
    const query = `
      INSERT INTO scores(googleId, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    return pool.query(query, [id, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating])
  };

  getResultsById(id) {
    console.log('getresultsbyid function')
    const query = `SELECT * FROM scores WHERE scores.id = $1`;
    // SELECT * FROM scores s INNER JOIN users ON users.googleId = s.googleId WHERE users.googleId=110466235164956177628 THIS WONT WORK
    return pool.query(query, [id]);
  };

  getResultsByGoogleId(googleId) {
    console.log('getresultsbygoogleid function')
    const query = `SELECT * FROM scores WHERE scores.googleId = $1`;
    // SELECT * FROM scores s INNER JOIN users ON users.googleId = s.googleId WHERE users.googleId=110466235164956177628 THIS WONT WORK
    return pool.query(query, [googleId]);
  };

  // gets the overal scores for rankings
  getAllScores() {
    const query = `SELECT users.name, s.googleId, s.score FROM scores s INNER JOIN users ON users.googleId = s.googleId`;
    return pool.query(query);
  }
};

const ScoresModel = new Scores();

module.exports = {
  ScoresModel
}