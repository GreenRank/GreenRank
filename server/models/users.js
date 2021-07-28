// models/users.js will declare all functions involving users

const pool = require('./db');

class User {
  
  createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS
      users (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR UNIQUE NOT NULL,
<<<<<<< HEAD
        google_id VARCHAR UNIQUE NOT NULL
=======
        googleId VARCHAR UNIQUE NOT NULL
>>>>>>> 52cde7a8f5c19a5b2df69336062c267d4b54a717
      );`
    return pool.query(query);
  };
  
  createUserWithGoogle(name, username, googleId) {
    const query = `INSERT INTO users(name, username, google_id) VALUES ($1, $2, $3)`;
    return pool.query(query, [name, username, googleId]);
  };

  getUserByGoogleId(id) {
    const query = `SELECT * FROM users WHERE google_id = $1`
    return pool.query(query, [id]);
  };

  // updateUserById(id, params) {}
  // updateUserByGoogleId(googleId, params) {}
}

const UserModel = new User();

module.exports  = {
  UserModel
}