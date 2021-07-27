// index.js will initialize the tables, if they dont already exist

const { UserModel } = require('./users');
const { ScoresModel } = require('./scores');

const createAllTables = () => {
  console.log('create all tables initiated...')
  return UserModel.createTable()
    .then(() => {
      return ScoresModel.createTable();
    })
    .catch((err) => {
      console.log(err)
      console.log('error in creating initial tables')
    });
};

module.exports = {
  createAllTables, UserModel, ScoresModel
}