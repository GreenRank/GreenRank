// models/scores.js will declare all functions involving scores

const { pool } = require('./db');

class Scores {
  createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS
      public.scores (
        "id" serial PRIMARY KEY,
        "user_id" varchar NOT NULL,
        "score" varchar NOT NULL
        ) WITH (
          OIDS=FALSE
        )
    `;
    return pool.query(query);
  };

  addScore(params) {
    const query = `
      INSERT INTO scores(user_id, score)
      VALUES ($1, $2)
    `;
    return pool.query(query, [params.id, score])
  };

  getScoresById(id) {
    const query = `SELECT * FROM scores WHERE scores.user_id = $1`;
    return pool.query(query, [id]);
  };

  getScoresByGoogleId(id) {
    const query = `SELECT * FROM scores WHERE scores.googleId = $1`;
    return pool.query(query, [id]);
  };
};

const ScoresModel = new Scores();

module.exports = {
  ScoresModel
}