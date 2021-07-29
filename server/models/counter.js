// models/users.js will declare all functions involving users

const pool = require('./db');

class Count {
  
  createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS
      count (
        id SERIAL PRIMARY KEY,
        global_count VARCHAR NOT NULL
      );`
    return pool.query(query);
  };
  
  getCurrentCount() {
    const query = `SELECT * FROM count WHERE id = $1`;
    return pool.query(query, [1]);
  };

  updateCount(newCount) {
    const query = `UPDATE count SET global_count = $1 WHERE id = $2`;
    return pool.query(query[1, newCount])
  };

}

const CountModel = new Count();

module.exports  = {
  CountModel
}