// index.js will initialize the tables, if they dont already exist

const { UserModel } = require('./users');
const { ScoresModel } = require('./scores');

const createAllTables = () => {
  return UserModel.createTable()
    .then(() => {
      return ScoresModel.createTable();
    });
};

module.exports = {
  createAllTables, UserModel, ScoresModel
}