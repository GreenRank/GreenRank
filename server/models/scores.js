// models/scores.js will declare all functions involving scores

const pool = require('./db');

class Scores {
  createTable() {
    console.log('inside of Scores class - create table function')
    const query = `
      CREATE TABLE IF NOT EXISTS
      scores (
        id serial PRIMARY KEY,
        date varchar NOT NULL,
        googleId varchar NOT NULL,
        score varchar NOT NULL,
        mobility_kg varchar NOT NULL,
        consumption_kg varchar NOT NULL,
        household_kg varchar NOT NULL
      )`;
    return pool.query(query);
  };

  addResults(id, score) {
    console.log('SCORE FROM ADDRESULTS: ', score);
    console.log(score.kg)
    const query = `
      INSERT INTO scores(googleId, score, mobility_kg, consumption_kg, household_kg, date)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    return pool.query(query, [id, score.kg, score.mobility_kg, score.consumption_kg, score.household_kg, new Date()])
  };

  getResultsByGoogleId(id) {
    const query = `SELECT * FROM scores WHERE scores.googleId = $1`;
    return pool.query(query, [id]);
  };

  // gets the overal scores for rankings
  getAllScores() {
    const query = `SELECT googleId, score FROM scores`;
    return pool.query(query);
  }
};

const ScoresModel = new Scores();

module.exports = {
  ScoresModel
}