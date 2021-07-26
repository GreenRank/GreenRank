// models/users.js will declare all functions involving users

const { pool } = require('./db');

class User {
  
  createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS
      public.users (
        "id" serial PRIMARY KEY,
        "name" varchar NOT NULL,
        "username" varchar UNIQUE NOT NULL,
        "googleId" varchar UNIQUE NOT NULL
        ) WITH (
        OIDS=FALSE
    );
    `
    return pool.query(query);
  };

  createUser(params) {
    const query = `
    INSERT INTO users(name, username)
    VALUES ($1, $2)
    `;
    return pool.query(query, [params.name, params.username])
  };
  
  createUserWithGoogle(googleId) {
    const query = `INSERT INTO users(googleId) VALUES ($1)`;
    return pool.query(query, [googleId]);
  };
  
  getUserById(id) {
    const query = `SELECT * FROM users WHERE users.id = $1`
    return pool.query(query, [id]);
  };

  getUserByGoogleId(id) {
    const query = `SELECT * FROM users WHERE users.googleId = $1`
    return pool.query(query, [id]);
  };

  updateUserById(id, params) {}
  updateUserByGoogleId(googleId, params) {}
}

const UserModel = new User();

module.exports  = {
  UserModel
}