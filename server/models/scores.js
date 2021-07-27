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
        score varchar NOT NULL
        mobility_vehicles varchar NOT NULL
        consumption_food NOT NULL
        consumption_shopping varchar NOT NULL
        household_area varchar NOT NULL
        household_building varchar NOT NULL
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

  getResultsByGoogleId(id) {
    const query = `SELECT * FROM scores WHERE scores.googleId = $1`;
    return pool.query(query, [id]);
  };

  // gets the overal scores for rankings
  getAllScores() {
    const query = `SELECT user_id, score FROM scores`;
    return pool.query(query);
  }
};

const ScoresModel = new Scores();

module.exports = {
  ScoresModel
}