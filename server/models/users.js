// models/users.js will declare all functions involving users

const pool = require('./db');

class User {
  
  createTable() {
    console.log('inside of User class -- create table function')
    const query = `
      CREATE TABLE IF NOT EXISTS
      users (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        username VARCHAR UNIQUE NOT NULL,
        googleId VARCHAR UNIQUE NOT NULL
      );`
    return pool.query(query);
  };

  // createUser(params) {
  //   const query = `
  //   INSERT INTO users(name, username)
  //   VALUES ($1, $2)
  //   `;
  //   return pool.query(query, [params.name, params.username])
  // };
  
  createUserWithGoogle(googleId) {
    const query = `INSERT INTO users(googleId) VALUES ($1)`;
    return pool.query(query, [googleId]);
  };
  
  // getUserById(id) {
  //   const query = `SELECT * FROM users WHERE users.id = $1`
  //   return pool.query(query, [id]);
  // };

  // getUserByGoogleId(id) {
  //   const query = `SELECT * FROM users WHERE users.googleId = $1`
  //   return pool.query(query, [id]);
  // };

  updateUserById(id, params) {}
  updateUserByGoogleId(googleId, params) {}
}

const UserModel = new User();

module.exports  = {
  UserModel
}