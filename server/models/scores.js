// models/scores.js will declare all functions involving scores

const pool = require('./db');

class Scores {
  createTable() {
    console.log('inside of Scores class - create table function')
    const query = `
      CREATE TABLE IF NOT EXISTS
      scores (
        id serial PRIMARY KEY,
        user_id varchar NOT NULL,
        score varchar NOT NULL
      )`;
    return pool.query(query);
  };

  addScore(id, score) {
    const query = `
      INSERT INTO scores(user_id, score)
      VALUES ($1, $2)
    `;
    return pool.query(query, [id, score])
  };

  getScoresById(id) {
    const query = `SELECT * FROM scores WHERE scores.user_id = $1`;
    return pool.query(query, [id]);
  };

  getScoresByGoogleId(id) {
    const query = `SELECT * FROM scores WHERE scores.googleId = $1`;
    return pool.query(query, [id]);
  };

  getAllScores() {
    const query = `SELECT * FROM scores`;
    return pool.query(query);
  }
};

const ScoresModel = new Scores();

module.exports = {
  ScoresModel
}