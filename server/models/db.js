const { Pool } = require("pg");
const { PG_URI } = require("../env");

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  // use if creating tables in elephant
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },

  //use if using class method
  pool
};